const Component = require('../../db/models/Component');
const Grade = require('../../db/models/Grade');

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

async function httpGetGradesByComponentId(req, res, next) {
  try {
    const componentId = req.params.componentID;

    const component = await Component.findByPk(componentId, { include: Grade });

    if (!component) throw 'Component not found';

    return res.status(200).json({
      data: component.grades ?? []
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  httpGetAllComponents,
  httpGetComponentById,
  httpGetGradesByComponentId,
};