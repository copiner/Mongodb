/*
  inserting Document
*/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';
const dbName = 'test';

(async function() {
    const client = new MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true});

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    const r = await db.collection('inserts').insertOne({
        a:1,
        b: function() { return 'hello'; }
      }, {
        w: 'majority',
        wtimeout: 10000,
        serializeFunctions: true,
        forceServerObjectId: true
      }
    );

    assert.equal(1, r.insertedCount);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
