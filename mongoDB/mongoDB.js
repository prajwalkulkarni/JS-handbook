const MongoClient = require('mongoDB').MongoClient

const url = 'URL_TO_DATABASE'


//Steps to connect and write to mongoDB
/*
1.Create mongo client and pass DB url to it.
2.Connect to mongo server.
3.Connect to databse within the server
4.Access collection within the databse and pass the name of the collection(collection will be created
if it doesn't exist).
5.Do CRUD operations.
*/

const client = new MongoClient(url)
await client.connect()
const db = client.db()

const collection = db.collection('COLLECTION_NAME')

collection.insertOne({record})

client.close() //Close connection after doing the operations.
