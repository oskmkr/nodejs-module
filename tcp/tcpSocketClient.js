/**
 * 
 * @author oskmkr
 */
var net = require('net');

var PORT = 8023;

var client = net.Socket();
client.setEncoding('utf-8');

client.connect(PORT, 'localhost', function() {
    console.log(arguments);

    console.log('connected...');

    process.stdin.resume();
    process.stdin.on('data', function(data) {
	
	// TODO data 의 type 을 확인할 필요가 있따!!
	console.log('typed...' + data);
	
	client.write(data.toString(), 'utf-8');
	client.write('하하하');
    })

    client.on('data', function(data) {
	console.log(data);
    });

    client.on('close', function() {
	console.log('connection is closed');
    })
});
