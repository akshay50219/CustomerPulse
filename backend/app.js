const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const config = require("./config/env");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

/*
 * Helmet provides sensible HTTP security headers.
 * Additional security rules can be introduced here as the
 * authentication and business APIs are implemented.
 */
app.use(helmet());

/*
 * CORS is restricted to the configured frontend origin.
 * This prevents arbitrary browser origins from accessing the API.
 */
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to CustomerPulse RFM Analytics API"
  });
});

app.use("/api", routes);

/*
 * Unknown routes receive a consistent API error instead of
 * Express returning an inconsistent response format.
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
    errors: []
  });
});

app.use(errorHandler);

module.exports = app;