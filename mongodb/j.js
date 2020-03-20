/*
Read Methods
*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';
const dbName = 'test';

(async function() {
    const client = new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology:true});

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection('findread');

    // Insert multiple documents
    const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
    assert.equal(3, r.insertedCount);

    // Get first two documents that match the query
    const docs = await col.find({a:1}).limit(2).toArray();
    assert.equal(2, docs.length);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
