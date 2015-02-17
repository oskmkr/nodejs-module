#!/usr/bin/env node
/**
 * 
 */
var request = require('request');

request.get({
    url : 'http://localhost:8080/job/test-freestyle/build?delay=0sec'
}, function(err, res, body) {
    console.log('res...', res);
    
    if(err) {
	throw err;
    }
    
    console.log(res.statusCode, body);
    
});