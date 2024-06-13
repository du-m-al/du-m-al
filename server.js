// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 }); // Порт может быть любым, удобным для вас

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // При получении сообщения от клиента, отправляем его обратно всем подключенным клиентам
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});



