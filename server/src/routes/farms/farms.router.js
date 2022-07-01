const express = require('express');

const {
  httpGetAllFarms,
  httpGetFarmById,
  httpGetTurbinesByFarmId,
  httpGetTurbineByIdAndByFarmId,
} = require('./farms.controller');

const farmsRouter = express.Router();

farmsRouter.get('/', httpGetAllFarms);
farmsRouter.get('/:farmID', httpGetFarmById);
farmsRouter.get('/:farmID/turbines', httpGetTurbinesByFarmId);
farmsRouter.get('/:farmID/turbines/:turbineID', httpGetTurbineByIdAndByFarmId);

module.exports = farmsRouter;