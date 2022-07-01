const Farm = require('../../db/models/Farm');
const Turbine = require('../../db/models/Turbine');

async function httpGetAllFarms(req, res, next) {
  try {
    const farms = await Farm.findAll();

    if (!farms) throw 'Farms not found';

    return res.status(200).json({
      data: farms
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetFarmById(req, res, next) {
  try {
    const farmId = req.params.farmID;

    const farm = await Farm.findByPk(farmId);

    if (!farm) throw 'Farm not found';

    return res.status(200).json(farm);

  } catch (error) {
    next(error);
  }
};

async function httpGetTurbinesByFarmId(req, res, next) {
  try {
    const farmId = req.params.farmID;

    const farm = await Farm.findByPk(farmId, { include: Turbine });

    if (!farm) throw 'Farm not found';

    return res.status(200).json({
      data: farm.turbines ?? []
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllFarms,
  httpGetFarmById,
  httpGetTurbinesByFarmId,
};