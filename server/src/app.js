const express = require('express');
const cors = require('cors');

require('./db/models/associations')();
const farmsRouter = require('./routes/farms/farms.router');
const turbinesRouter = require('./routes/turbines/turbines.router');
const componentsRouter = require('./routes/components/components.router');
const inspectionsRouter = require('./routes/inspections/inspections.router');
const gradesRouter = require('./routes/grades/grades.router');
const componentTypesRouter = require('./routes/component-types/component-types.router');
const gradeTypesRouter = require('./routes/grade-types/grade-types.router');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use('/api/farms', farmsRouter);
app.use('/api/turbines', turbinesRouter);
app.use('/api/components', componentsRouter);
app.use('/api/inspections', inspectionsRouter);
app.use('/api/grades', gradesRouter);
app.use('/api/component-types', componentTypesRouter);
app.use('/api/grade-types', gradeTypesRouter);

app.use(errorHandler);

module.exports = app;