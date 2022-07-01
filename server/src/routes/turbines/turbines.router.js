const express = require('express');

const {
  httpGetAllTurbines,
  httpGetTurbineById,
} = require('./turbines.controller');

const turbinesRouter = express.Router();

turbinesRouter.get('/', httpGetAllTurbines);
turbinesRouter.get('/:turbineID', httpGetTurbineById);

module.exports = turbinesRouter;