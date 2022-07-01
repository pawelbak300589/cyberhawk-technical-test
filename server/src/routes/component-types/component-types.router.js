const express = require('express');

const {
  httpGetAllComponentTypes,
} = require('./component-types.controller');

const componentTypesRouter = express.Router();

componentTypesRouter.get('/', httpGetAllComponentTypes);

module.exports = componentTypesRouter;