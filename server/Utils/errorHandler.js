const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "An error has occurred on the server",
    error: err.message,
  });
};

module.exports = errorHandler;
