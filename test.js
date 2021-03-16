const SteamServer = require("./steamserver");

// let steamServer = new SteamServer('194.147.120.78', 29137); // Manteln event
let steamServer = new SteamServer('81.19.209.74', 32012); // Manteln public
// let steamServer = new SteamServer('51.11.241.53', 27016); // THE LEMON CLUB
// let steamServer = new SteamServer('62.194.164.229', 27018); // Miel's server
// let steamServer = new SteamServer('51.178.68.211', 19503); // blackflag dirty

// steamServer.init()
//   .then(function () {

//     function cycle(){
//       console.time('total request');
//       steamServer.requestInfo().then((status) => {
//         if (status !== undefined) console.log(status);
//         steamServer.requestPlayer().then((status) => {
//           if (status !== undefined) console.log(status);
//           steamServer.requestRules().then((status) => {
//             if (status !== undefined) console.log(status);
//             //const serverProperties = steamServer.getProperties();
//             //console.log(serverProperties.playersList);
//             console.timeEnd('total request');
//             cycle();
//           }).catch(console.error);
//         }).catch(console.error);
//       }).catch(console.error);
//     }

//     function cycle(){

//       //console.time('total request');
//       steamServer.requestInfo().then((status) => {
//         if (status !== undefined) console.log(status);

//         //console.timeEnd('total request');
//         console.log(steamServer.getKeywords());
        
//         setTimeout(cycle, 10000); // Delay
//       }).catch(console.error);

//     }

//     cycle();

//   }).catch(console.error);
  
steamServer.init().then(function () {


let infoRequestPromise =  new Promise((resolve, reject) => {
  (function cycle(){

    steamServer.requestInfo().then((status) => {
      if (status !== undefined) {
        cycle();
      } else {
        resolve();
        return;
      }
    }).catch(console.error);

  })();
});

infoRequestPromise.then(function(){

  (function cycle(){

    steamServer.requestPlayer().then((status) => {
      if (status !== undefined) console.log(status);

      let players = steamServer.getPlayersLobby();

      let playersString = '';
      for (let j = 0; j < players.length; j++) {
        playersString += `${('0' + (j + 1)).slice(-2)}: ${players[j]}\n`;
      }

      console.log(playersString);


      // setTimeout(cycle, 50);
      cycle();
    }).catch(console.error);

  })();
});



}).catch(console.error);