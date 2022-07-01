const express = require('express');

const {
  httpGetAllTurbines,
  httpGetTurbineById,
  httpGetComponentsByTurbineId,
  httpGetComponentByIdAndByTurbineId,
} = require('./turbines.controller');

const turbinesRouter = express.Router();

turbinesRouter.get('/', httpGetAllTurbines);
turbinesRouter.get('/:turbineID', httpGetTurbineById);
turbinesRouter.get('/:turbineID/components', httpGetComponentsByTurbineId);
turbinesRouter.get('/:turbineID/components/:componentID', httpGetComponentByIdAndByTurbineId);

module.exports = turbinesRouter;