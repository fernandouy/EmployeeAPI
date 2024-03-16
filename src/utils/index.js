import mongoose from "mongoose";

export async function connectDatabase(uri) {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log(error);
  }
}
