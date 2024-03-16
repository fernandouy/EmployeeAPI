import CustomError from "../utils/CustomError";
import dotenv from "dotenv";

dotenv.config();

const errorHandler = (
  error,
  req,
  res,
  next
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode,
      stack: process.env.ENVIRONMENT === "development" ? error.stack : {},
    });
  }

  return res.status(500).json({ message: error.message, status: 500});
};

export default errorHandler;
