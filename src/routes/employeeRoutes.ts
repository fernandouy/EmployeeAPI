import express, { Request, Response } from "express";
import Employee from "../models/employee";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "../controllers/employeeController";

const router = express.Router();

router
  .get("/", getEmployees)
  .post("/", createEmployee)
  .get("/:id", getEmployeeById)
  .put("/:id", updateEmployee)
  .delete("/:id", deleteEmployee);

export default router;
