const express = require('express');

const {
  httpGetAllFarms,
} = require('./farms.controller');

const farmsRouter = express.Router();

farmsRouter.get('/', httpGetAllFarms);

module.exports = farmsRouter;