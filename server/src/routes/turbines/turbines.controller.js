const Turbine = require('../../db/models/Turbine');
const Component = require('../../db/models/Component');
const Inspection = require('../../db/models/Inspection');

async function httpGetAllTurbines(req, res, next) {
  try {
    const turbines = await Turbine.findAll();

    if (!turbines) throw 'Turbines not found';

    return res.status(200).json({
      data: turbines
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetTurbineById(req, res, next) {
  try {
    const turbineId = req.params.turbineID;

    const turbine = await Turbine.findByPk(turbineId);

    if (!turbine) throw 'Turbine not found';

    return res.status(200).json(turbine);

  } catch (error) {
    next(error);
  }
};

async function httpGetComponentsByTurbineId(req, res, next) {
  try {
    const turbineId = req.params.turbineID;

    const turbine = await Turbine.findByPk(turbineId, { include: Component });

    if (!turbine) throw 'Turbine not found';

    return res.status(200).json({
      data: turbine.components ?? []
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetComponentByIdAndByTurbineId(req, res, next) {
  try {
    const turbineId = req.params.turbineID;
    const componentId = req.params.componentID;

    const component = await Component.findOne({ where: { id: componentId, turbine_id: turbineId } });

    if (!component) throw 'Component not found';

    return res.status(200).json(component);

  } catch (error) {
    next(error);
  }
};

async function httpGetInspectionsByFarmId(req, res, next) {
  try {
    const turbineId = req.params.turbineID;

    const turbine = await Turbine.findByPk(turbineId, { include: Inspection });

    if (!turbine) throw 'Turbine not found';

    return res.status(200).json({
      data: turbine.inspections ?? []
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetInspectionByIdAndByTurbineId(req, res, next) {
  try {
    const turbineId = req.params.turbineID;
    const inspectionId = req.params.inspectionID;

    const inspection = await Inspection.findOne({ where: { id: inspectionId, turbine_id: turbineId } });

    if (!inspection) throw 'Inspection not found';

    return res.status(200).json(inspection);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllTurbines,
  httpGetTurbineById,
  httpGetComponentsByTurbineId,
  httpGetComponentByIdAndByTurbineId,
  httpGetInspectionsByFarmId,
  httpGetInspectionByIdAndByTurbineId,
};