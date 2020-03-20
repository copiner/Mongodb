/*
  connect todo
*/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
    // Connection URL
    const url = 'mongodb://127.0.0.1:27017/test';
    // Database Name
    const dbName = 'test';
    const client = new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true});

    try {
	//Use connect method to connect to the Server
	await client.connect();

	const db = client.db(dbName);
        console.log(db);
    } catch (err) {
	    console.log(err.stack);
    }

    client.close();
})();
