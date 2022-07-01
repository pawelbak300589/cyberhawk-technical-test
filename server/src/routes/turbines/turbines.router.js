const express = require('express');

const {
  httpGetAllTurbines,
  httpGetTurbineById,
  httpGetComponentsByTurbineId,
} = require('./turbines.controller');

const turbinesRouter = express.Router();

turbinesRouter.get('/', httpGetAllTurbines);
turbinesRouter.get('/:turbineID', httpGetTurbineById);
turbinesRouter.get('/:turbineID/components', httpGetComponentsByTurbineId);

module.exports = turbinesRouter;