// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "An error has occurred on the server";
  res.status(statusCode).send({ message });
};

module.exports = errorHandler;
