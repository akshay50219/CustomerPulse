const app = require("./app");
const config = require("./config/env");
const connectDatabase = require("./config/database");

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(config.port, () => {
      console.log(
        `CustomerPulse backend running on http://localhost:${config.port}`
      );
    });
  } catch (error) {
    console.error("Unable to start CustomerPulse backend.");
    process.exit(1);
  }
};

startServer();