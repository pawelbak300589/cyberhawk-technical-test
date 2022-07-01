const express = require('express');

const {
  httpGetAllComponentTypes,
  httpGetComponentTypeById,
} = require('./component-types.controller');

const componentTypesRouter = express.Router();

componentTypesRouter.get('/', httpGetAllComponentTypes);
componentTypesRouter.get('/:componentType', httpGetComponentTypeById);

module.exports = componentTypesRouter;