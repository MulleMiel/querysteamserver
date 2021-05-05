# querysteamserver

Under development.

This project contains a class `SteamServer` located in `steamserver.js`. Use it in the following way:
```js
let steamServer = new SteamServer('81.19.209.74', 32012);

steamServer.init().then(function () {

    steamServer.requestInfo().then((status) => {
      if (status !== undefined) console.log(status);

      console.log(wreckfestServer.getInfo());
      steamServer.requestPlayer().then((status) => {
        if (status !== undefined) console.log(status);

        console.log(steamServer.getPlayers());
        steamServer.requestRules().then((status) => {
          if (status !== undefined) console.log(status);
          
            console.log(steamServer.getRules());
        }).catch(console.error);
      }).catch(console.error);
    }).catch(console.error);
  
}).catch(console.error);
```
The methods `requestInfo()`, `requestPlayer()` and `requestRules()` all return a promise with the `status`. This will be uqual to *undefined* when the server responded with data. The `SteamServer` instance has then been updated with the new information, which can obtained with `getInfo()`, `getPlayers()` and `getRules()`. When the server didn't had a response, `status` will contain a message. No error is thrown, because you may want to use the method repeatedly, and just continue when there is no response. When `status` is equal to *false*, it means that there is no connection with the server, or to be precise: the server didn't respond with data after sending 10 requests in a row.

Here is an example when you request data in a repeated cycle:

```js
steamServer.init().then(function () {

  (function cycle(){

    steamServer.requestPlayer().then((status) => {
      if (status !== undefined) console.log(status);

      console.log(steamServer.playersList);

      setTimeout(cycle, 1000);
    }).catch(console.error);

  })();

}).catch(console.error);
```

Some properties contain game specific information. For this a new Class can be added that extends the functionality of `SteamServer`. This project contains a subclass for the game Wreckfest, called `WreckfestServer`. It is provided with the method `getLobbySettings()` and returns current lobbysettings for your Wreckfest server. These settings are located in the text-string `keywords`, that is retreived by calling `requestInfo()`. The file `wreckfestkeywords.js` contains all definitions to decipher the lobbysettings and probably needs to be updated when Wreckfest adds new cars, tracks or server functionality. The following example demonstrates how you can use the `WreckfestServer` class.

```js
const WreckfestServer = require("./wreckfestserver");
let wreckfestServer = new WreckfestServer('84.248.175.150', 26903);

wreckfestServer.init().then(function () {

    wreckfestServer.requestInfo().then((status) => {
      if (status !== undefined) console.log(status);

      console.log(wreckfestServer.getLobbySettings());

      setTimeout(cycle, 1000);
    }).catch(console.error);

}).catch(console.error);
```