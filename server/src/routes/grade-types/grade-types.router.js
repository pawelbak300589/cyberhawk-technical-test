const express = require('express');

const {
  httpGetAllGradeTypes,
  httpGetGradeTypeById,
} = require('./grade-types.controller');

const gradeTypesRouter = express.Router();

gradeTypesRouter.get('/', httpGetAllGradeTypes);
gradeTypesRouter.get('/:gradeTypeID', httpGetGradeTypeById);

module.exports = gradeTypesRouter;