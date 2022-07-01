const express = require('express');

const {
  httpGetAllTurbines,
  httpGetTurbineById,
  httpGetComponentsByTurbineId,
  httpGetComponentByIdAndByTurbineId,
  httpGetInspectionsByFarmId,
} = require('./turbines.controller');

const turbinesRouter = express.Router();

turbinesRouter.get('/', httpGetAllTurbines);
turbinesRouter.get('/:turbineID', httpGetTurbineById);
turbinesRouter.get('/:turbineID/components', httpGetComponentsByTurbineId);
turbinesRouter.get('/:turbineID/components/:componentID', httpGetComponentByIdAndByTurbineId);
turbinesRouter.get('/:turbineID/inspections', httpGetInspectionsByFarmId);

module.exports = turbinesRouter;