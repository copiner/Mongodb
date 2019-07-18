/*
Bulk Write Operations
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
    const col = db.collection('bulkops');

    // Create ordered bulk, for unordered initializeUnorderedBulkOp()
    const bulk = col.initializeOrderedBulkOp();
    // Insert 10 documents
    for(let i = 0; i < 10; i++) {
      bulk.insert({a: i});
    }

    // Next perform some upserts
    for(let i = 0; i < 10; i++) {
      bulk.find({b:i}).upsert().updateOne({b:1});
    }

    // Finally perform a remove operation
    bulk.find({b:1}).deleteOne();

    // Execute the bulk with a journal write concern
    const result = await bulk.execute();
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
