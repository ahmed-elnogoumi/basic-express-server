function notFound(req, res, next){
    res.status(404).send("404, not found");
}

module.exports = notFound;