/*
findOneAndUpdate
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
    const fam = db.collection('findAndModify');
    let r;

    // Insert multiple documents
    r = await fam.insertMany([{a:1}, {a:2}, {a:2}]);
    assert.equal(3, r.result.n);

    // Modify and return the modified document
    r = await fam.findOneAndUpdate({a:1}, {$set: {b: 1}}, {
      returnOriginal: false,
      sort: [['a',1]],
      upsert: true
    });
    assert.equal(1, r.value.b);

  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
