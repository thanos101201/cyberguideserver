const webSocket = require('ws');
const user = require('../routers/user');
const group = require('../routers/group');
const location = require('../routers/location');
require('../db/db');
const webServer = new webSocket.Server({
    port: 3001
});

webServer.on('listening', function started(){
    console.log('Server started');
});

webServer.on('connection', function connection(ws){
    console.log('Client connected');
    ws.on('message', async function incoming(message){
       try{
        var mesg = Buffer.from(message.toJSON().data).toString('utf-8');
        var dt = JSON.parse(`${mesg}`);
        console.log(message);
        if(dt.route === 'user'){
            // ws.send(dt);
            console.log('Route is here');
            try{
                let response = await user(dt);
                console.log(response);
                ws.send(response.Buffer);
                return;
            }
            catch(e){
                ws.send(e);
            }
        }
        if(dt.route === 'location'){
            try{
                let response = location(dt);
                ws.send(response);
                return;
            }
            catch(e){
                ws.send(e);
            }
        }
        if(dt.route === 'group'){
            try{
                let response = group(dt);
                ws.send(response);
                return;
            }
            catch(e){
                ws.send(e);
            }
            ws.send("group(dt)");
        }
        else{
            ws.send('No user');
        }
       }
       catch(e){
        console.log(e);
       }
    });
})
