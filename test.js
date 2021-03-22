const WreckfestServer = require("./wreckfestserver");
let wreckfestServer = new WreckfestServer('84.248.175.150', 26903); // Manteln leage 2,3,4
// let steamServer = new SteamServer('194.147.120.78', 29137); // Manteln event
// let wreckfestServer = new WreckfestServer('81.19.209.74', 32012); // Manteln public
// let steamServer = new SteamServer('51.11.241.53', 27016); // THE LEMON CLUB
// let wreckfestServer = new WreckfestServer('62.194.164.229', 27018); // Miel's server
// let steamServer = new SteamServer('51.178.68.211', 19503); // blackflag dirty

wreckfestServer.init()
  .then(function () {

    function cycle(){
      console.time('total request');
      wreckfestServer.requestInfo().then((status) => {
        if (status !== undefined) console.log(status);
        //console.log(wreckfestServer.getInfo());

        wreckfestServer.requestPlayer().then((status) => {
          if (status !== undefined) console.log(status);
          //console.log(wreckfestServer.getPlayers());

          wreckfestServer.requestRules().then((status) => {
            if (status !== undefined) console.log(status);
            console.log(wreckfestServer.getRules());
            console.timeEnd('total request');

            cycle();
          }).catch(console.error);
        }).catch(console.error);
      }).catch(console.error);
    }

    // function cycle(){

    //   //console.time('total request');
    //   wreckfestServer.requestInfo().then((status) => {
    //     if (status !== undefined) console.log(status);

    //     //console.timeEnd('total request');
    //     console.log(wreckfestServer.getInfo());
    //     console.log(wreckfestServer.getLobbySettings());
        
    //     //setTimeout(cycle, 1000); // Delay
    //   }).catch(console.error);

    // }

    cycle();

  }).catch(console.error);
  

// Output playerlist
// steamServer.init().then(function () {


//   let infoRequestPromise =  new Promise((resolve, reject) => {
//     (function cycle(){

//       steamServer.requestInfo().then((status) => {
//         if (status !== undefined) {
//           cycle();
//         } else {
//           resolve();
//           return;
//         }
//       }).catch(console.error);

//     })();
//   });

//   infoRequestPromise.then(function(){

//     (function cycle(){

//       steamServer.requestPlayer().then((status) => {
//         if (status !== undefined) console.log(status);

//         let players = steamServer.getPlayersLobby();

//         let playersString = '';
//         for (let j = 0; j < players.length; j++) {
//           playersString += `${('0' + (j + 1)).slice(-2)}: ${players[j]}\n`;
//         }

//         console.log(playersString);


//         // setTimeout(cycle, 50);
//         cycle();
//       }).catch(console.error);

//     })();
//   });



// }).catch(console.error);