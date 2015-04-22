/**
 * 
 */
var user = {
	userId : 'oskmkr'
};

exports.index = function(req, res) {
    
    if(req.query.delay === 'true') {
	setTimeout(function() {
		res.send(user);
	    }, 50000);
	    
    } else {
	res.send(user);
    }
    
};

exports.create = function(req, res) {
    console.log(req.param);
    
    user = {
	userId : req.param.id    
    }
    
    res.send('create user..' + user);
};

exports.new = function(req, res) {
    res.send('create user form');
};

exports.show = function(req, res) {
    var id = req.params.id;

    res.send(user);
};

exports.edit = function(req, res) {
    res.send('edit user form');
};

exports.update = function(req, res) {
    console.log('update..');
    console.log(req.param.id);
    
    user = {
	'userId' : req.param.id    
    };
    
    res.send(user);
    
};

exports.remove = function(req, res) {
    user = {};
    res.send(user);
};

