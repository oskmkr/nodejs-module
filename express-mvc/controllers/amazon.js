/**
 * 
 */

var path = require('path');
var gCustomerId;

exports.index = function(req, res) {
    // res.send('show keyword list');
	res.sendfile(path.join(__dirname, '../public') + '/amazon.html');
};

exports.create = function(req, res) {
    var stripeToken = req.body.stripeToken;
    
    console.log('stripToken' + stripeToken);
    
    // 이미 사용한 토큰을 재사용한다면?
    // var stripeToken = 'tok_16CM5WCWOCgVAMlZ15ZMVWf8';
    
    var charge = stripe.charges.create({
    	  amount: 1000, // amount in cents, again
    	  currency: "usd",
    	  source: stripeToken,
    	  description: "Example charge"
    	}, function(err, charge) {
    	  if (err && err.type === 'StripeCardError') {
    	    // The card has been declined
    		  
    		  console.log(err);
    		  
    	  }
    	});
   
    stripe.customers.create({
    	  source: stripeToken,
    	  description: 'payinguser@example.com'
    	}).then(function(customer) {
    	  return stripe.charges.create({
    	    amount: 1000, // amount in cents, again
    	    currency: "usd",
    	    customer: customer.id
    	  });
    	}).then(function(charge) {
    		gCustomerId = charge.customer; 
    		
    		console.log('gCustomerId', gCustomerId);
    	});

    res.send('charge obj : ', charge);
};

exports.new = function(req, res) {
	stripe.charges.create({  
		  amount: 5500, // amount in cents, again
		  currency: "usd",
		  customer: gCustomerId
		});

	
    res.send('recursive payment');
};

exports.show = function(req, res) {
};

exports.edit = function(req, res) {
    res.send('edit keyword form');
};

exports.update = function(req, res) {
	
};

exports.remove = function(req, res) {
    res.send('remove keyword');
};
