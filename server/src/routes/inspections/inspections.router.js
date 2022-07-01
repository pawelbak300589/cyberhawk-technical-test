const express = require('express');

const {
  httpGetAllInspections,
  httpGetInspectionById,
  httpGetGradesByInspectionId,
} = require('./inspections.controller');

const inspectionsRouter = express.Router();

inspectionsRouter.get('/', httpGetAllInspections);
inspectionsRouter.get('/:inspectionID', httpGetInspectionById);
inspectionsRouter.get('/:inspectionID/grades', httpGetGradesByInspectionId);

module.exports = inspectionsRouter;