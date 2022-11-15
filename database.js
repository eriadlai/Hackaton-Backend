const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://eriadlai:adlai1999@cluster0.na3rner.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect();

module.exports = client;
