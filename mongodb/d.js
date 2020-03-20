/*
  Updating Documents
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
    const upts = db.collection('updates');
    let r;

    // Insert multiple documents
    r = await upts.insertMany([{a:1}, {a:2}, {a:2}]);
    assert.equal(3, r.insertedCount);

    // Update a single document
    r = await upts.updateOne({a:1}, {$set: {b: 1}});
    assert.equal(1, r.matchedCount);
    assert.equal(1, r.modifiedCount);

    // Update multiple documents
    r = await upts.updateMany({a:2}, {$set: {b: 1}});
    assert.equal(2, r.matchedCount);
    assert.equal(2, r.modifiedCount);

    // Upsert a single document
    r = await upts.updateOne({a:3}, {$set: {b: 1}}, {upsert: true});
    assert.equal(0, r.matchedCount);
    assert.equal(1, r.upsertedCount);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
