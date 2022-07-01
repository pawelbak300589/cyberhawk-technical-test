/**
 * The global error handler
 */
const errorHandler = (err, req, res, next) => {
  console.log('err', err);
  switch (true) {
    case typeof err === 'string':
      const is404 = err.toLowerCase().endsWith('not found');
      const statusCode = is404 ? 404 : 400;
      return res.status(statusCode).json({ error: err });
    default:
      return res.status(500).json({ error: err.message });
  }
};

module.exports = errorHandler;