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
	//	console.log(db);
	/*
	let r = await db.collection('inserts').insertOne({a:1});
	assert.equal(1,r.insertedCount);

	r = await db.collection('inserts').insertMany([{a:2},{a:3}]);
	assert.equal(2,r.insertedCount);
	*/

	const col = db.collection('updates');
	let u;
	//Insert multiple document	
	
	//u = await col.insertMany([{a:1},{a:2},{a:2}]);
	//assert.equal(3,u.insertedCount);

	//Update a single document
	//u = await col.updateOne({a:1},{$set:{b:1}});
	//assert.equal(1,u.matchedCount);
	//assert.equal(1,u.modifiedCount);
	
	//Update multiple documents
	
	//u = await col.updateMany({a:2},{$set:{b:1}});
	//assert.equal(4,u.matchedCount);
	//assert.equal(4,u.modifiedCount);
	
	//Upsert a single document
	//u = await col.updateOne({a:3},{$set:{b:1},{upsert:true}});
	//assert.equal(0,u.matchedCount);
	//assert.equal(1,u.modifiedCount);
	
	u = await col.deleteMany({a:2});

    } catch (err) {
	console.log(err.stack);
    }

    client.close();
})();
