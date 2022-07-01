const Inspection = require('../../db/models/Inspection');
const Grade = require('../../db/models/Grade');

async function httpGetAllInspections(req, res, next) {
  try {
    const inspections = await Inspection.findAll();

    if (!inspections) throw 'Inspections not found';

    return res.status(200).json({
      data: inspections
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetInspectionById(req, res, next) {
  try {
    const inspectionId = req.params.inspectionID;

    const inspection = await Inspection.findByPk(inspectionId);

    if (!inspection) throw 'Inspection not found';

    return res.status(200).json(inspection);

  } catch (error) {
    next(error);
  }
};

async function httpGetGradesByInspectionId(req, res, next) {
  try {
    const inspectionId = req.params.inspectionID;

    const inspection = await Inspection.findByPk(inspectionId, { include: Grade });

    if (!inspection) throw 'Inspection not found';

    return res.status(200).json({
      data: inspection.grades ?? []
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetGradeByIdAndInspectionId(req, res, next) {
  try {
    const inspectionId = req.params.inspectionID;
    const gradeId = req.params.gradeID;

    const grade = await Grade.findOne({ where: { id: gradeId, inspection_id: inspectionId } });

    if (!grade) throw 'Grade not found';

    return res.status(200).json(grade);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllInspections,
  httpGetInspectionById,
  httpGetGradesByInspectionId,
  httpGetGradeByIdAndInspectionId,
};