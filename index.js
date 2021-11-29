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

const categories = require('./routes/categories');

// apply routes
app.use('/categories', categories);

module.exports = app;
