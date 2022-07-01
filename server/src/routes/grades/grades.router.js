const express = require('express');

const {
  httpGetAllGrades,
} = require('./grades.controller');

const gradesRouter = express.Router();

gradesRouter.get('/', httpGetAllGrades);

module.exports = gradesRouter;