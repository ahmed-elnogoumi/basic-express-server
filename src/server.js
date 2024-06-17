const express = require("express");
const validator = require("../src/middleware/validator");
const logger = require("../src/middleware/logger");
const handle404 = require("../src/error-handlers/404");
const handle500 = require("../src/error-handlers/500");

const app = express();

app.use(logger);

app.get("/person/:name", validator, (req, res, next) => {
  const { name } = req.params;
  res.status(200).json({ name });
});

app.use(handle404);

app.use(handle500);

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

module.exports = { app, start };
