const express = require('express');

const {
  httpGetAllGrades,
  httpGetGradesById,
} = require('./grades.controller');

const gradesRouter = express.Router();

gradesRouter.get('/', httpGetAllGrades);
gradesRouter.get('/:gradeID', httpGetGradesById);

module.exports = gradesRouter;