import mongoose from "mongoose";
import "dotenv/config";

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/db-coder-cesar";

export const initMongoDB = async() => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Conectado a la base de datos de MongoDB");
  } catch (error) {
    console.log(`ERROR => ${error}`);
  }
}
