/**
 * 
 * @author oskmkr
 */
var net = require('net');

var PORT = 8023;

var socketQueue = [];

var server = net.createServer(function(socket) {
 //   console.log(socket);
    console.log('connected from ' + socket.remoteAddress + ' port : ' + socket.remotePort);
    socketQueue.push(socket);
    
    socket.on('data', function(data) {
	//console.log(arguments);
	var msg = data + 'from ' + socket.remoteAddress + ' port : ' + socket.remotePort;
	//console.log(msg);
	//console.log('socketQueue', socketQueue);
	for ( var p in socketQueue) {
	    var s = socketQueue[p];
	    if (s.remoteAddress == socket.remoteAddress && s.remotePort == socket.remotePort) {
		//console.log('equals', s);
	    } else {
		s.write(msg, 'utf-8');
	    }
	}
	// socket.write(msg);
    });

    socket.on('error', function(e) {
	console.log('error', e);
    });
    
    socket.on('close', function() {
	console.log(arguments);

	for(var p in socketQueue) {
	    var s = socketQueue[p];
	    if (s.remoteAddress == socket.remoteAddress && s.remotePort == socket.remotePort) {
		//console.log('equals', s);
		socketQueue.slice(p, 1);
	    }
	}

	console.info('connection closed');
    });

});

server.listen(PORT);

console.log('Server started on ' + PORT);