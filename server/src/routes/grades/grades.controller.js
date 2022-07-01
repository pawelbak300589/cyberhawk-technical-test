const Grade = require('../../db/models/Grade');

async function httpGetAllGrades(req, res, next) {
  try {
    const grades = await Grade.findAll();

    if (!grades) throw 'Grades not found';

    return res.status(200).json({
      data: grades
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetGradesById(req, res, next) {
  try {
    const gradeId = req.params.gradeID;

    const grade = await Grade.findByPk(gradeId);

    if (!grade) throw 'Grade not found';

    return res.status(200).json(grade);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllGrades,
  httpGetGradesById,
};