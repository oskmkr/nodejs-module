/**
 * 
 */
var keywordBO = require('./KeywordBO');

exports.index = function(req, res) {
    // res.send('show keyword list');
    res.send(keywordBO.read());
};

exports.create = function(req, res) {
    var idx = keywords.length + 1, name = req.body.name;
    console.log(req.body);
    keywords.push({
	id : idx,
	name : name
    });
    
    res.send('create keyword..' + name);
};

exports.new = function(req, res) {
    res.send('create keyword form');
};

exports.show = function(req, res) {
    var id = req.params.id;
    var wantKeyword;
    
    if(id) {
	id = parseInt(id, 10);
    }
    
    keywords.forEach(function(keyword) {
	console.log('keyword', keyword, keyword.id);
	if(id === keyword.id) {
	    wantKeyword = keyword;
	}
    });
    
    console.log('wantKeyword', id, wantKeyword);
     
    if(!wantKeyword) {
	res.send('not found keyword -- id : ' + id);
    }
        
    res.send(wantKeyword);
    
};

exports.edit = function(req, res) {
    res.send('edit keyword form');
};

exports.update = function(req, res) {
    res.send('update keyword');
    
    var id = req.params.id;
    var name = req.body.name;
    console.log('body.name' + name);
    var wantKeyword;
    
    if(id) {
	id = parseInt(id, 10);
    }
    
    keywords.forEach(function(keyword) {
	if(id === keyword.id) {
	    keyword.name = name; 
	}
    });
     
    
    if(!wantKeyword) {
	res.send('not found keyword -- id : ' + id);
    }
    
    res.send(wantKeyword);
};

exports.remove = function(req, res) {
    res.send('remove keyword');
};
