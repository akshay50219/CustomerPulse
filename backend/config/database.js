const mongoose = require("mongoose");
const config = require("./env");

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.mongodbUri);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = connectDatabase;