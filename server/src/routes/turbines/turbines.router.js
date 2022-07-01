const express = require('express');

const {
  httpGetAllTurbines,
} = require('./turbines.controller');

const turbinesRouter = express.Router();

turbinesRouter.get('/', httpGetAllTurbines);

module.exports = turbinesRouter;