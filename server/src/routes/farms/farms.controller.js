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

module.exports = {
  httpGetAllFarms,
};