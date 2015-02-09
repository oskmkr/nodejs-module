/**
 * @author oskmkr@gmail.com
 * @reference https://www.npmjs.com/package/rabbit.js/
 * @reference http://www.rabbitmq.com/blog/tag/nodejs/
 * @reference http://www.squaremobius.net/rabbit.js/
 */
/**
 * not working yet...
 */
var context = require('rabbit.js').createContext('amqp://localhost:5675');

context.on('ready', function() {
   
    console.log('ready to context...');
    
    var sub = context.socket('SUB');
    
    sub.pipe(process.stdout);
    
    sub.connect('events', '*' , function() {
	console.log(arguments);
    })

    sub.on('data', function(data) {
	console.log('...## ', data);
    })
});