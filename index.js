const express = require('express');

// provides Express middleware to enable CORS with various options
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const categories = require('./routes/categories');
const gear = require('./routes/gear');

// apply routes
app.use('/categories', categories);
app.use('/gear', gear);

module.exports = app;
