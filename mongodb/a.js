/*
  connect todo
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
	//Use connect method to connect to the Server
	await client.connect();

	const db = client.db(dbName);
	//console.log(db);
    } catch (err) {
	console.log(err.stack);
    }

    client.close();
})();
