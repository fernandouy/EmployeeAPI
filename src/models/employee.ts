import mongoose from "mongoose";

type Level = "junior" | "mid" | "senior";

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
    type: String as unknown as Level,
    required: [true, "Level is required"],
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"],
  },
});

export default mongoose.model("Employee", employeeSchema);
