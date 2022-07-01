const express = require('express');

const {
  httpGetAllGradeTypes,
} = require('./grade-types.controller');

const gradeTypesRouter = express.Router();

gradeTypesRouter.get('/', httpGetAllGradeTypes);

module.exports = gradeTypesRouter;