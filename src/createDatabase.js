import mongoose from "mongoose";
import subscriberModel from "./models/subscribers.js";
import data from "./data.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Mongodb Connected Successfully");
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    console.log("✅ Database seeded successfully");
  } catch (error) {
    console.error("❌ Mongodb Connection has failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Mongodb Disconnected");
  }
};

connectDB();
