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

    // Use the admin database for the operation
    const adminDb = db.admin();

    // Retrive the build information using the admin command
    await adminDb.command({buildInfo:1})
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
