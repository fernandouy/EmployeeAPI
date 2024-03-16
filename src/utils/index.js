const mongoose = require("mongoose");

async function connectDatabase(uri) {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDatabase }