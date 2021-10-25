require('dotenv').config();
const { MongoClient } = require('mongodb');
const URI = process.env.MONGO_URI;

async function main(callback) {
    const URI = process.env['MONGO_URI']; // Declare MONGO_URI in your .env file
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

}