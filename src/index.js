import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes";
import { connectDatabase } from "./utils";
import errorHandler from "./middlewares/errorHandler";

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
