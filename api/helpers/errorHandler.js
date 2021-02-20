function errorHandler(res, e){
  console.log(e);
  console.log(e.message);
  return res.status(e.httpCode).send({ "reason": e.message });
}

module.exports = {
  errorHandler
}
