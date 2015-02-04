/**
 * 
 * @author oskmkr
 */

var childProcess = require('child_process'), cmd = childProcess.spawn('cmd', ['/c', 'dir\n']);


cmd.stdout.on('data', function(data) {
    console.log('stdout : ' + data);
});

cmd.stderr.on('data', function(data) {
    console.log('stderr' + data);
});

cmd.on('exit', function(code) {
    console.log('child process exited with code ' + code);
});