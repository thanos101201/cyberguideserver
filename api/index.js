const webSocket = require('ws');
const webServer = new webSocket.Server({
    port: 3001
});

webServer.on('listening', function started(){
    console.log('Server started');
});

webServer.on('connection', function connection(ws){
    console.log('Client connected');
    ws.on('message', function incoming(message){
       console.log('Message recieved '+ message); 
       ws.send(message);
    });
    webServer.on('', function incoming(message){
        console.log('message');
    });
})
