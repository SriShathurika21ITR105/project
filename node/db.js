// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URL
// const dbName = 'your-database-name';

// const client = new MongoClient(url, { useNewUrlParser: true });

// client.connect(function(err) {
//   if (err) {
//     console.error('Failed to connect to the database:', err);
//     return;
//   }

//   console.log('Connected to the database');
//   const db = client.db(dbName);

//   // You can export 'db' to use it in other parts of your application.
//   module.exports = db;
// });
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000; // Set your desired port
const mongoURI = 'mongodb+srv://your-username:your-password@your-cluster-name.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// ... Define your API routes and other server logic ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
