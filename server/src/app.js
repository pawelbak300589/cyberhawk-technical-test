const express = require('express');

require('./db/models/associations')();
const farmsRouter = require('./routes/farms/farms.router');
const turbinesRouter = require('./routes/turbines/turbines.router');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/farms', farmsRouter);
app.use('/turbines', turbinesRouter);

app.use(errorHandler);

module.exports = app;