/*
findOneAndDelete
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

    // Get the findAndModify collection
    const col = db.collection('findAndModify');
    let r;

    // Insert multiple documents
    r = await col.insertMany([{a:1}, {a:2}, {a:2}]);
    assert.equal(3, r.result.n);

    // Remove a document from MongoDB and return it
    r = await col.findOneAndDelete({a:1});
    assert.ok(r.value.b == null);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
