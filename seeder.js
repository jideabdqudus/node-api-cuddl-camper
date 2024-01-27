const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Bootcamp = require("./models/Bootcamps");

// Read JSON files
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

// Impoort into DB
const importData = async () => {
  try {
    await connectDB();
    await Bootcamp.create(bootcamps);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error, "error");
    console.log("Error with data import".red.inverse);
    process.exit();
  }
};

// Delete data
const deleteData = async () => {
  try {
    await connectDB();
    await Bootcamp.deleteMany({});
    console.log("Data Destroyed...".yellow.inverse);
    process.exit();
  } catch (error) {
    console.log("Error with data destroyed".red.inverse);
    process.exit();
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
