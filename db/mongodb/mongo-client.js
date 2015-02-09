/**
 * 
 * @author oskmkr@gmail.com
 * @reference https://www.npmjs.com/package/mongodb
 * 
 */

var MongoClient = require('mongodb').MongoClient;

// Create
MongoClient.connect('mongodb://localhost:27017/testdb', function(err, db) {
    if (err) {
	throw err;
    }
    
    var collection = db.collection('users');
    
    collection.insert({id:'nodejs'}, {w : 1}, function(err, objects) {
	if(err) {
	    console.warn(err.message);
	}
	
	if(err && err.message.indexOf('E11000') !== -1) {
	    // this _id was already inserted in the database
	    console.error('this _id was already inserted in the database..');
	}
	
	db.close();
    });
});

// Read
MongoClient.connect('mongodb://localhost:27017/testdb', function(err, db) {

    if (err) {
	throw err;
    }

    var collection = db.collection('users');

    collection.find({id: 'nodejs'}).limit(10).toArray(function(err, docs) {
	console.log(docs);

	db.close();
    });

});

// Update
MongoClient.connect('mongodb://localhost:27017/testdb', function(err, db) {
    if (err) {
	throw err;
    }
    
    var collection = db.collection('users');
    
    collection.update({id:'nodejs'}, {$set: {id:'nodejs..updated'}}, {w:1}, function(err) {
	if(err) {
	    console.warn(err.message);
	} else {
	    console.log('successfully updated');
	}
	
	
	db.close();
    });
});
