const Component = require('../../db/models/Component');

async function httpGetAllComponents(req, res, next) {
  try {
    const components = await Component.findAll();

    if (!components) throw 'Components not found';

    return res.status(200).json({
      data: components
    });

  } catch (error) {
    next(error);
  }
};

async function httpGetComponentById(req, res, next) {
  try {
    const componentId = req.params.componentID;

    const component = await Component.findByPk(componentId);

    if (!component) throw 'Component not found';

    return res.status(200).json(component);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllComponents,
  httpGetComponentById,
};