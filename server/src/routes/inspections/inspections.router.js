const express = require('express');

const {
  httpGetAllInspections,
  httpGetInspectionById,
  httpGetGradesByInspectionId,
  httpGetGradeByIdAndInspectionId,
} = require('./inspections.controller');

const inspectionsRouter = express.Router();

inspectionsRouter.get('/', httpGetAllInspections);
inspectionsRouter.get('/:inspectionID', httpGetInspectionById);
inspectionsRouter.get('/:inspectionID/grades', httpGetGradesByInspectionId);
inspectionsRouter.get('/:inspectionID/grades/:gradeID', httpGetGradeByIdAndInspectionId);

module.exports = inspectionsRouter;