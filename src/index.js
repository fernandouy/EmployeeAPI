const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const employeeRoutes = require("./routes/employeeRoutes");
const { connectDatabase } = require("./utils");
const { errorHandler } = require("./middlewares/errorHandler");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URL is not defined");
}

connectDatabase(MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is listening on port ${port}`);
});
