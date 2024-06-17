const handle500 = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
};

module.exports = handle500;
