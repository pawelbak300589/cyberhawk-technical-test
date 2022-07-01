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

async function httpGetComponentTypeById(req, res, next) {
  try {
    const componentTypeId = req.params.componentTypeID;

    const componentType = await ComponentType.findByPk(componentTypeId);

    if (!componentType) throw 'Component type not found';

    return res.status(200).json(componentType);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllComponentTypes,
  httpGetComponentTypeById,
};