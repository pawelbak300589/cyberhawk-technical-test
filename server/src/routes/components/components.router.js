const express = require('express');

const {
  httpGetAllComponents,
  httpGetComponentById,
} = require('./components.controller');

const componentsRouter = express.Router();

componentsRouter.get('/', httpGetAllComponents);
componentsRouter.get('/:componentID', httpGetComponentById);

module.exports = componentsRouter;