const express = require('express');

const {
  httpGetAllComponents,
  httpGetComponentById,
  httpGetGradesByComponentId,
} = require('./components.controller');

const componentsRouter = express.Router();

componentsRouter.get('/', httpGetAllComponents);
componentsRouter.get('/:componentID', httpGetComponentById);
componentsRouter.get('/:componentID/grades', httpGetGradesByComponentId);

module.exports = componentsRouter;