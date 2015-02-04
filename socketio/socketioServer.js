/**
 * 
 * @author oskmkr@gmail.com
 */
var server = require('http').createServer();
var io = require('socket.io')(server);

var PORT = 3000;

io.on('connection', function(socket) {

    console.log('#connection' + socket.remoteAddress + socket.remotePort);

    socket.on('event', function(data) {
	console.log('#event ' + data);
    });

    socket.on('disconnect', function() {
	console.log('#disconnect...');
    });
});

server.listen(PORT);

console.log('server running on ' + PORT);