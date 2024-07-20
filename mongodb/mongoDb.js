 const {MongoClient} = require('mongodb');
 const url = 'mongodb://adminUser:password@localhost:27017/';
 const database= 'e-comm'
 const client = new MongoClient(url);

 async function getData()
 {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
 }

console.log(getData());