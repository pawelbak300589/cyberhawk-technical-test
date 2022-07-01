const express = require('express');

const {
  httpGetAllFarms,
  httpGetFarmById,
} = require('./farms.controller');

const farmsRouter = express.Router();

farmsRouter.get('/', httpGetAllFarms);
farmsRouter.get('/:farmID', httpGetFarmById);

module.exports = farmsRouter;