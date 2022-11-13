const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wccUser1:asdas2adsa@wecancodedb.3zjk8cj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect();
module.exports = client;