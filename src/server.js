'use strict'

const express = require("express");
const app = express();

const logger = require('./middleware/logger'); 
const validator = require('./middleware/validator');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

app.use(logger);

app.get('/greet', validator, (req, res) => {
    res.send(`Hello, ${req.query.name}`);
});
  
app.get('/person', validator, (req, res) => {
    res.json({ name: req.query.name });
});
  
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(notFound);
app.use(serverError);

module.exports = {
    start(port) {
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
    }
};
