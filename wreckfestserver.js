const SteamServer = require("./steamserver");
const wreckfestKeywordsDefinitions = require("./wreckfestkeywords");

class WreckfestServer extends SteamServer {

  constructor(host, port) {
    super(host, port);
  }

  convertKeywords() {
    const keywordsString = this.bin2String(this.keywords);
    const keywordsArray = keywordsString.split(",");
    let converted = [];

    for (let i = 0; i < keywordsArray.length; i++) {
      const definition = wreckfestKeywordsDefinitions[i];

      const name = definition.name;
      let value = "";

      if (definition.type === "array") {
        if (keywordsArray[i] !== "-1") {
          const index = parseInt(keywordsArray[i]);
          value = definition.values[index];
        } else {
          value = definition.negative;
        }
      }

      if (definition.type === "number") {
          value = parseInt(keywordsArray[i]);
      }

      converted.push({
        name: name,
        value: value
      });
    }

    return converted;
  }
  
  getLobbySettings(){
    if (this.keywords) {
      const convertedKeywords = this.convertKeywords();

      return {
        updateFrequency: convertedKeywords[0].value,
        racingStatus: convertedKeywords[1].value,
        track: convertedKeywords[2].value,
        modCount: convertedKeywords[3].value,
        gamemode: convertedKeywords[4].value,
        teamCount: convertedKeywords[5].value,
        weather: convertedKeywords[6].value,
        laps: convertedKeywords[7].value,
        reverseLimiter: convertedKeywords[9].value.reverseLimiter,
        specialVehicles: convertedKeywords[9].value.specialVehicles,
        carReset: convertedKeywords[9].value.carReset,
        carClassRestriction: convertedKeywords[10].value,
        carTypeRestriction: convertedKeywords[11].value,
        botCount: convertedKeywords[12].value,
        timeLimit: convertedKeywords[13].value,
        eliminationInterval: convertedKeywords[14].value,
        multiRaceRoundIndex: convertedKeywords[15].value,
        steamport: convertedKeywords[16].value,
        gameport: convertedKeywords[17].value,
        vehicleDamageMode: convertedKeywords[18].value,
        carResetDelay: convertedKeywords[19].value,
        excludeFromQuickplay: convertedKeywords[20].value,
      }
    } else {
      return false;
    }
  }
}

module.exports = WreckfestServer;