const express = require('express');

const {
  httpGetAllInspections,
  httpGetInspectionById,
} = require('./inspections.controller');

const inspectionsRouter = express.Router();

inspectionsRouter.get('/', httpGetAllInspections);
inspectionsRouter.get('/:inspectionID', httpGetInspectionById);

module.exports = inspectionsRouter;