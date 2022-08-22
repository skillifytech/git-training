const { Client} = require('pg')
const { MongoClient } = require("mongodb");

const pgClient = new Client({
    user: 'dbuser',
    host: 'database.server.com',
    database: 'mydb',
    password: 'secretpassword',
    port: 3211,
})
pgClient.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})

// Connection URI
const uri =
    "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";
// Create a new MongoClient
const mongoClient = new MongoClient(uri);


mongoClient.connect()
    .then(() => console.log('connected'))
    .catch(err => console.error('connection error', err.stack))

