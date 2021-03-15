const dgram = require('dgram');


class SteamServer {
  constructor(host, port) {
    this.HOST = host;
    this.PORT = port;

    this.client = null;

    this.A2S_INFO_REQUEST = Buffer.from("FFFFFFFF54536F7572636520456E67696E6520517565727900", "hex");
    this.A2S_INFO_RESPONSE_HEADER = 0x49;

    this.A2S_PLAYER_REQUEST = Buffer.from("FFFFFFFF55FFFFFFFF", "hex");
    this.A2S_PLAYER_RESPONSE_HEADER = 0x44;

    this.A2S_RULES_REQUEST = Buffer.from("FFFFFFFF56FFFFFFFF", "hex");
    this.A2S_RULES_RESPONSE_HEADER = 0x45;
    this.A2S_CHALLENGE_HEADER = 0x41;

    this.A2S_CURRENT = null;

    this.IS_REQUESTING_INFO = false;
    this.IS_REQUESTING_PLAYER = false;
    this.IS_REQUESTING_RULES = false;

    this.protocol = null; // byte
    this.name = null; // string
    this.map = null; // string
    this.folder = null; // string
    this.game = null; // string
    this.id = null; // short
    this.players = null; // byte
    this.playersMax = null; // byte
    this.bots = null; // byte
    this.serverType = null; // byte
    this.enviroment = null; // byte
    this.visibility = null; // byte
    this.vac = null; // byte
    this.version = null; // string
    this.extraFlag = null; // byte
    this.port = null; // short
    this.steamid = null; // long long
    this.portSpec = null; // short
    this.nameSpec = null; // string
    this.keywords = null; // string
    this.gameid = null; // long long
    this.playersAmount = null; // byte
    this.playersList = null; // [byte, string, long, float]
    this.rulesAmount = null; // short
    this.rulesList = null; // [string, string]
  }

  init() {
    return new Promise((resolve, reject) => {
      this.client = dgram.createSocket('udp4');
      this.client.on("message", function(message, rinfo) {
        let buffer =  Buffer.from(message, "hex");
        buffer = this.bufferToArray(buffer);
        const header = this.unpackHEADER(buffer);

        if (this.A2S_INFO_RESPONSE_HEADER === header) {
          this.unpackINFO (buffer);
          this.IS_REQUESTING_INFO = false;
        }

        if (this.A2S_CHALLENGE_HEADER === header && this.A2S_PLAYER_RESPONSE_HEADER === this.A2S_CURRENT) {
          const challenge = this.unpack('long', buffer); // byte
          const A2S_PLAYER_REQUEST_CHALLENGE = Buffer.from(`FFFFFFFF55${this.bin2Hex(challenge)}`, "hex");
          this.send(A2S_PLAYER_REQUEST_CHALLENGE);
        }

        if (this.A2S_PLAYER_RESPONSE_HEADER === header) {
          this.unpackPLAYER(buffer);
          this.IS_REQUESTING_PLAYER = false;
        }

        if (this.A2S_CHALLENGE_HEADER === header && this.A2S_RULES_RESPONSE_HEADER === this.A2S_CURRENT) {
          const challenge = this.unpack('long', buffer); // byte
          const A2S_RULES_REQUEST_CHALLENGE = Buffer.from(`FFFFFFFF56${this.bin2Hex(challenge)}`, "hex");
          this.send(A2S_RULES_REQUEST_CHALLENGE);
        }

        if (this.A2S_RULES_RESPONSE_HEADER === header) {
          this.unpackRULES(buffer);
          this.IS_REQUESTING_RULES = false;
        }

      }.bind(this));

      this.client.on("listening", function() {
        resolve();
        console.log("listening on ", this.client.address());
      }.bind(this));

      this.client.on("close", function() {
        console.log("closed");
      });

      this.client.on("error", function(err) {
        console.log("error: ",err);
        reject(error);
      });
      this.client.bind(3000);
    });
  }

  requestInfo() {
    this.A2S_CURRENT = this.A2S_INFO_RESPONSE_HEADER;
    this.IS_REQUESTING_INFO = true;

    this.send(this.A2S_INFO_REQUEST);

    return this.getRequestPromise('info');
  }

  requestPlayer() {
    this.A2S_CURRENT = this.A2S_PLAYER_RESPONSE_HEADER;
    this.IS_REQUESTING_PLAYER = true;

    this.send(this.A2S_PLAYER_REQUEST);

    return this.getRequestPromise('player');
  }

  requestRules() {
    this.A2S_CURRENT = this.A2S_RULES_RESPONSE_HEADER;
    this.IS_REQUESTING_RULES = true;

    this.send(this.A2S_RULES_REQUEST);

    return this.getRequestPromise('rules');
  }

  send(message) {
    this.client.send(message, 0, message.length, this.PORT, this.HOST, function(err, bytes) {
      if (err) throw err;
      //console.log('UDP request message sent to ' + this.HOST +':'+ this.PORT);
    }.bind(this));
  }

  getRequestPromise(request) {
    return new Promise((resolve, reject) => {
      let self = this;
      let numRequests = 0;
      let reqDelay = 20;

      function checkRequesting() {
        let IS_REQUESTING;
        if (request === 'info') IS_REQUESTING = self.IS_REQUESTING_INFO;
        if (request === 'player') IS_REQUESTING = self.IS_REQUESTING_PLAYER;
        if (request === 'rules') IS_REQUESTING = self.IS_REQUESTING_RULES;

        if (!IS_REQUESTING) {
          resolve()
        } else {
          numRequests++;
          if (numRequests >= (200 / reqDelay)) { // 2 seconds timeout
            resolve(`${request} request failed`);
          }
          setTimeout(checkRequesting, reqDelay); // this checks the flag every 20 milliseconds
        }
      }
      checkRequesting();
    });
  }

  getProperties(){
    
    return {
      protocol: this.protocol,
      name: this.bin2String(this.name),
      map: this.bin2String(this.map),
      folder: this.bin2String(this.folder),
      game: this.bin2String(this.game),
      id: parseInt("0x" + this.bin2Hex(this.id.reverse())),
      players: this.players,
      playersMax: this.playersMax,
      bots: this.bots,
      serverType: this.bin2String([this.serverType]),
      enviroment: this.bin2String([this.enviroment]),
      visibility: this.visibility,
      vac: this.vac,
      version: this.bin2String(this.version),
      port: parseInt("0x" + this.bin2Hex(this.port.reverse())),
      steamid: parseInt("0x" + this.bin2Hex(this.steamid.reverse())),
      portSpec: this.portSpec,
      nameSpec: this.nameSpec,
      keywords: this.bin2String(this.keywords),
      gameid: parseInt("0x" + this.bin2Hex(this.gameid.reverse())),
      playersAmount: this.playersAmount,
      playersList: this.convertBinPlayerList(),
      rulesAmount: parseInt("0x" + this.bin2Hex(this.rulesAmount.reverse())),
      rulesList: this.convertBinRulesList()
    }
  }

  getKeywords(){
    return this.bin2String(this.keywords);
  }

  bufferToArray(buffer) {
    return Array.prototype.slice.call(buffer, 0);
  }

  unpackHEADER(buffer) {
    buffer.splice(0, 4); // 4 bytes
    return this.unpack('byte', buffer); // byte
  }

  unpackINFO (buffer) {
    this.protocol = this.unpack('byte', buffer);
    this.name = this.unpack('string', buffer);
    this.map = this.unpack('string', buffer);
    this.folder = this.unpack('string', buffer);
    this.game = this.unpack('string', buffer);
    this.id = this.unpack('short', buffer);
    this.players = this.unpack('byte', buffer);
    this.playersMax = this.unpack('byte', buffer);
    this.bots = this.unpack('byte', buffer);
    this.serverType = this.unpack('byte', buffer);
    this.enviroment = this.unpack('byte', buffer);
    this.visibility = this.unpack('byte', buffer);
    this.vac = this.unpack('byte', buffer);
    this.version = this.unpack('string', buffer);
    const extraFlag = this.unpack('byte', buffer);
    this.port = extraFlag & 0x80 ? this.unpack('short', buffer) : false;
    this.steamid = extraFlag & 0x10 ? this.unpack('long long', buffer) : false;
    this.portSpec = extraFlag & 0x40 ? this.unpack('short', buffer) : false;
    this.nameSpec = extraFlag & 0x40 ? this.unpack('string', buffer) : false;
    this.keywords = extraFlag & 0x20 ? this.unpack('string', buffer) : false;
    this.gameid = extraFlag & 0x01 ? this.unpack('long long', buffer) : false;

    return buffer;
  }

  unpackPLAYER (buffer) {
    this.playersAmount = this.unpack('byte', buffer);
    this.playersList = [];
    for (let i = 0; i < this.playersAmount; i++) {
      this.playersList.push({
        index: this.unpack('byte', buffer),
        name: this.unpack('string', buffer),
        score: this.unpack('long', buffer),
        duration: this.unpack('float', buffer)
      });
    }
    return buffer;
  }

  unpackRULES (buffer) {
    this.rulesAmount = this.unpack('short', buffer);
    this.rulesList = [];
    const rulesAmount = parseInt("0x" + this.bin2Hex(this.rulesAmount.slice().reverse()));
    for (let i = 0; i < rulesAmount; i++) {
      this.rulesList.push({
        name: this.unpack('string', buffer),
        value: this.unpack('string', buffer)
      });
    }
    return buffer;
  }

  unpack(format, buffer){
    if (!buffer) return false;
    switch (format){
      case 'byte':
        return buffer.shift(0);
      case 'short':
        return buffer.splice(0, 2);
      case 'long':
        return buffer.splice(0, 4);
      case 'float':
        return buffer.splice(0, 4);
      case 'long long':
        return buffer.splice(0, 8);
      case 'string':
        return buffer.splice(0, buffer.indexOf(0x00) + 1);
      default:
        return false
    }
  }

  convertBinRulesList(){
    let convertedRulesList = [];
    for (let i = 0; i < this.rulesList.length; i++) {
      convertedRulesList.push({
        name: this.bin2String(this.rulesList[i].name),
        value: this.bin2String(this.rulesList[i].value)
      });
    }
    return convertedRulesList;
  }

  convertBinPlayerList(){
    let convertedPlayerList = [];
    for (let i = 0; i < this.playersList.length; i++) {
     
      convertedPlayerList.push({
        index: this.playersList[i].index,
        name: this.bin2String(this.playersList[i].name),
        score: parseInt("0x" + this.bin2Hex(this.playersList[i].score.slice().reverse())),
        duration: parseInt("0x" + this.bin2Hex(this.playersList[i].duration.slice().reverse()))
      });
    }
    return convertedPlayerList;
  }

  bin2String(array) {
    if (array[array.length - 1] === 0x00) array.pop();
    return String.fromCharCode.apply(String, array);
  }
  
  bin2Hex(byteArray) {
    return Array.from(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
  }
}

module.exports = SteamServer;