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

    // Use the admin database for the operation
    const adminDb = db.admin();

    // Retrive the build information using the admin command
    let result = await adminDb.command({buildInfo:1});
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
