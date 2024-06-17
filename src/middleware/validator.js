function validator(req, res, next) {
  let names = [
    "Duke",
    "Snake Eyes",
    "Scarlett",
    "Roadblock",
    "Gung-Ho",
    "Shipwreck",
    "Lady Jaye",
    "Flint",
  ];
  if (!names.includes(req.params.name)) {
    const err = new Error("Try another name in G.I. Joe");
    err.status = 500;
    next(err);
  } else {
    next();
  }
}

module.exports = validator;
