/**
 * 
 * @author oskmkr@gmail.com
 * 
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function() {

    this.name = 'unknown';

    this.setName = function(name) {
	this.name = name;
    }

    this.getName = function() {
	return this.name;
    }
};

util.inherits(Person, EventEmitter);

Person.prototype.fireEvent = function(eventName) {
    this.emit(eventName);
}

var oPerson = new Person();

oPerson.on('click', function() {
    console.log('fire event.. click...');
});

oPerson.fireEvent('click');
