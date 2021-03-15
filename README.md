# querysteamserver

Under development.

This project contains a class `Steamserver` located in `steamserver.js`. Use it in the following way:
```js
steamServer.requestInfo().then((status) => {
  steamServer.requestInfo().then((status) => {
    if (status !== undefined) console.log(status);
    steamServer.requestPlayer().then((status) => {
      if (status !== undefined) console.log(status);
      steamServer.requestRules().then((status) => {
        if (status !== undefined) console.log(status);
        
          console.log(steamServer.getProperties());
      }).catch(console.error);
    }).catch(console.error);
  }).catch(console.error);
});
```
The methods `requestInfo()`, `requestPlayer()` and `requestRules()` all return a promise with the `status`. This will be uqual to *undefined* when the server responded with data, the object has then been updated with the new information, which can obtained with `getProperties()`, but you can add your own getters if you want. When the server didn't had a response, `status` will contain a message. No error is thrown, because you may want to use the method repeatedly, and just continue when there is no response.

Here is an example when you just request data in a repeated cycle:

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

## Todo

- Handle when server is not found or server disconnects
- Create more getters
- Unpack `methods` property for Wreckfest server
