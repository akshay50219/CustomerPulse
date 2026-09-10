const config = require("../config/env");

const errorHandler = (error, req, res, next) => {
  console.error(error);

  const statusCode = error.statusCode || 500;

  const response = {
    success: false,
    message:
      statusCode === 500 && config.nodeEnv === "production"
        ? "An unexpected server error occurred."
        : error.message || "An unexpected server error occurred.",
    errors: []
  };

  if (config.nodeEnv !== "production" && error.stack) {
    response.stack = error.stack;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;