function validator(req, res, next) {
    if (req.query.name) {
      next();
    } else {
      res.status(400).send('Name is required in the query string');
    }
  }
  
  module.exports = validator;  