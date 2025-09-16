import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import { swaggerUi, swaggerSpec } from "./swagger.js";

dotenv.config();
//swagger setup

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Just start server — no seeding here
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("❌ Error starting server:", error.message);
  }
};

startServer();
