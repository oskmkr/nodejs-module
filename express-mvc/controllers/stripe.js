/**
 * 
 */
var stripe = require('stripe')('sk_test_3gvBQkWGDu9zz0zcUqs1zbAi'), path = require('path');

exports.index = function(req, res) {
    // res.send('show keyword list');
	res.sendfile(path.join(__dirname, '../public') + '/stripe.html');
};

exports.create = function(req, res) {
    var stripeToken = req.body.stripeToken;
    
    console.log('stripToken' + stripeToken);
    
    var charge = stripe.charges.create({
    	  amount: 1000, // amount in cents, again
    	  currency: "usd",
    	  source: stripeToken,
    	  description: "Example charge"
    	}, function(err, charge) {
    	  if (err && err.type === 'StripeCardError') {
    	    // The card has been declined
    	  }
   	});
    
    res.send('charge obj : ', charge);
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
