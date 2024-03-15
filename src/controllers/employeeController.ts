import Employee from "../models/employee";
import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/CustomError";

export const getEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employees = await Employee.find();
  res.json(employees);
};

export const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, position, level, salary } = req.body;
  try {
    if (!name || !position || !level || !salary) {
      throw new CustomError("All fields 'name', 'position', 'level', 'salary' are required", 400);
    }
    const newEmployee = await Employee.create({
      name,
      position,
      level,
      salary,
    });
    res.json(newEmployee);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new CustomError("Employee not found", 404);
    }
    res.json(employee);
  } catch (error) {
    next(error);
  }
};

export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, position, level, salary } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      {
        name,
        position,
        level,
        salary,
      },
      { new: true }
    );
    if (!updatedEmployee) {
      throw new CustomError("Employee not found", 404);
    }
    res.json(updatedEmployee);
  } catch (error) {
    next(error);
  }
};

export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) {
      throw new CustomError("Employee not found", 404);
    }
    res.json(deletedEmployee);
  } catch (error) {
    next(error);
  }
};
