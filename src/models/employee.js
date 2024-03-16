const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  position: {
    type: String,
    required: [true, "Position is required"],
  },
  level: {
    type: String,
    required: [true, "Level is required"],
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"],
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
