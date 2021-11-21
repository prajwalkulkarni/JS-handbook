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

collection.insertOne({record}) //Add document



client.close() //Close connection after doing the operations.


const client = new MongoClient(url)
await client.connect()
const db = client.db()

const collection = await db.collection('COLLECTION_NAME') //Need to await when querying results

collection.find().toArray() //find returns a cursor to the query which can then be iterated over to fetch the desired result.
//If the whole collection needs to be returned, this 2 step process could be avoided by converting it to an array.


client.close() //Close connection after doing the operations.


//We can notice above that, each time we want to perform an operation, we are opening the connection
//connecting to server accessing the database, performing the operation and then closing the connection.
//This can get cumbersome at times. Hence, we could make use of Mongoose, it's like a helper class for MongoDb,
//it also makes it easier to define models and schemas to it

//Defining a model

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name:{type:String, required:true},
  age:{type:Number, requried:true}
})

const model = mongoose.model('NAME_OF_THE_COLLECTION',schema) //The specified named will further be converted to smallcase and will be pluralized.
//E.g
const productModel = mongoose.model('Product',schema)
//Collection name: products

module.exports = model


//At the place where CRUD operations needs to be done, import mongoose and appropriate models

const mongoose = require('mongoose')
const Product = require('./models/model');

mongoose.connect('URL_OF_THE_SERVER_DB')
//^ uses connection pooling to open and close connections as and when required.

//instantiate and pass data to the model
const instantiation = new Product({name:'Prajwal',age:20})
instantiation.save() //Save method is used to add new document to the collection.
//save is an asynchronous method.
                        
                        
