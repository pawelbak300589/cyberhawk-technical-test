const express = require('express');

require('./db/models/associations')();
const app = express();

app.use(express.json());

module.exports = app;