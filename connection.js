require('dotenv').config();
const { MongoClient } = require('mongodb');
const URI = process.env.MONGO_URI;