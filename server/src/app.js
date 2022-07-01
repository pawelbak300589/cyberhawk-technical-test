const express = require('express');

require('./db/models/associations')();

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use(errorHandler);

module.exports = app;