const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const categories = require('./routes/categories');

app.use('/categories', categories);

module.exports = app;
