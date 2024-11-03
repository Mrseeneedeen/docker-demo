const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

let db;

db = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

module.exports = db;
