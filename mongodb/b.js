/*
  inserting Document
*/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
    // Connection URL
    const url = 'mongodb://test:123456@localhost:27017/todo';
    // Database Name
    const dbName = 'todo';
    const client = new MongoClient(url,{useNewUrlParser:true});

    try {
	// Use connect method to connect to the Server
	await client.connect();

	const db = client.db(dbName);
	//console.log(db);
	let r = await db.collection('inserts').insertOne({a:1});
	assert.equal(1,r.insertedCount);

	r = await db.collection('inserts').insertMany([{a:2},{a:3}]);
	assert.equal(2,r.insertedCount);
	
    } catch (err) {
	console.log(err.stack);
    }

    client.close();
})();
