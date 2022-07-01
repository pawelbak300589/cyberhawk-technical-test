const express = require('express');

const {
  httpGetAllComponents,
} = require('./components.controller');

const componentsRouter = express.Router();

componentsRouter.get('/', httpGetAllComponents);

module.exports = componentsRouter;