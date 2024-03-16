const express = require("express");

const {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router
  .get("/", getEmployees)
  .post("/", createEmployee)
  .get("/:id", getEmployeeById)
  .put("/:id", updateEmployee)
  .delete("/:id", deleteEmployee);

module.exports = router;
