const express = require('express');

require('./db/models/associations')();
const farmsRouter = require('./routes/farms/farms.router');
const turbinesRouter = require('./routes/turbines/turbines.router');
const componentsRouter = require('./routes/components/components.router');
const inspectionsRouter = require('./routes/inspections/inspections.router');
const gradesRouter = require('./routes/grades/grades.router');
const componentTypesRouter = require('./routes/component-types/component-types.router');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/farms', farmsRouter);
app.use('/turbines', turbinesRouter);
app.use('/components', componentsRouter);
app.use('/inspections', inspectionsRouter);
app.use('/grades', gradesRouter);
app.use('/component-types', componentTypesRouter);

app.use(errorHandler);

module.exports = app;