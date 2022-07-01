const ComponentType = require('../../db/models/ComponentType');

async function httpGetAllComponentTypes(req, res, next) {
  try {
    const componentTypes = await ComponentType.findAll();

    if (!componentTypes) throw 'Component types not found';

    return res.status(200).json({
      data: componentTypes
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllComponentTypes,
};