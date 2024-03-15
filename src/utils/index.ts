import mongoose from "mongoose";

export async function connectDatabase(uri: string) {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log(error);
  }
}
