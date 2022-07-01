const express = require('express');

const {
  httpGetAllComponents,
  httpGetComponentById,
  httpGetGradesByComponentId,
  httpGetGradeByIdAndComponentId,
} = require('./components.controller');

const componentsRouter = express.Router();

componentsRouter.get('/', httpGetAllComponents);
componentsRouter.get('/:componentID', httpGetComponentById);
componentsRouter.get('/:componentID/grades', httpGetGradesByComponentId);
componentsRouter.get('/:componentID/grades/:gradeID', httpGetGradeByIdAndComponentId);

module.exports = componentsRouter;