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

async function httpGetGradeTypeById(req, res, next) {
  try {
    const gradeTypeId = req.params.gradeTypeID;

    const gradeType = await GradeType.findByPk(gradeTypeId);

    if (!gradeType) throw 'Grade type not found';

    return res.status(200).json(gradeType);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllGradeTypes,
  httpGetGradeTypeById,
};