const Inspection = require('../../db/models/Inspection');

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

module.exports = {
  httpGetAllInspections,
};