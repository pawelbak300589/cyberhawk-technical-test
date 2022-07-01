const Turbine = require('../../db/models/Turbine');
const Component = require('../../db/models/Component');

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

module.exports = {
  httpGetAllTurbines,
  httpGetTurbineById,
  httpGetComponentsByTurbineId,
};