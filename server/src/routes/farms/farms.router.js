const express = require('express');

const {
  httpGetAllFarms,
  httpGetFarmById,
  httpGetTurbinesByFarmId,
} = require('./farms.controller');

const farmsRouter = express.Router();

farmsRouter.get('/', httpGetAllFarms);
farmsRouter.get('/:farmID', httpGetFarmById);
farmsRouter.get('/:farmID/turbines', httpGetTurbinesByFarmId);

module.exports = farmsRouter;