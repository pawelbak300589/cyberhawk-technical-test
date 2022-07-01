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

module.exports = {
  httpGetAllGrades,
};