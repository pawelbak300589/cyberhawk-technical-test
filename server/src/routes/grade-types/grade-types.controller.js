const GradeType = require('../../db/models/GradeType');

async function httpGetAllGradeTypes(req, res, next) {
  try {
    const gradeTypes = await GradeType.findAll();

    if (!gradeTypes) throw 'Grade types not found';

    return res.status(200).json({
      data: gradeTypes
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllGradeTypes,
};