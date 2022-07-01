const express = require('express');

const {
  httpGetAllInspections,
} = require('./inspections.controller');

const inspectionsRouter = express.Router();

inspectionsRouter.get('/', httpGetAllInspections);

module.exports = inspectionsRouter;