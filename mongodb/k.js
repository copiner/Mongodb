/*
Read Methods
*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://test:123456@localhost:27017/todo';
const dbName = 'todo';

(async function() {
    const client = new MongoClient(url,{useNewUrlParser:true});

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection('find');

    // Insert multiple documents
    const r = await col.insertMany([{a:1}, {a:1}, {a:1}]);
    assert.equal(3, r.insertedCount);

    // Get the cursor
    const cursor = col.find({a:1}).limit(2);

    // Iterate over the cursor
    while(await cursor.hasNext()) {
      const doc = await cursor.next();
      console.dir(doc);
    }
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
