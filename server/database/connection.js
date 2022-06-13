const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017")
  
    console.log("Connection is successfull")
  } catch (e) {
    console.log(e);
  }
}
module.exports = connectDB;
