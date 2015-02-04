/**
 * 
 * @author oskmkr@gmail.com
 */
var server = require('http');
var io = require('socket.io')(server);

io.on('connection', function(socket) {

    socket.on('event', function(data) {

    });

    socket.on('disconnect', function() {

    });
});

server.listen(3000);
