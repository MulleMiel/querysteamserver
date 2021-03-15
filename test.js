const SteamServer = require("./steamserver");

// let steamServer = new SteamServer('194.147.120.78', 29137); // Manteln event
let steamServer = new SteamServer('81.19.209.74', 32012); // Manteln public
// let steamServer = new SteamServer('51.11.241.53', 27016); // THE LEMON CLUB

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

  (function cycle(){

    steamServer.requestPlayer().then((status) => {
      if (status !== undefined) console.log(status);

      console.log(steamServer.playersList);

      setTimeout(cycle, 1000);
    }).catch(console.error);

  })();

}).catch(console.error);