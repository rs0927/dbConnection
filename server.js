import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Connect to database
await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
    console.log(
      ` Server running on port ${PORT} in ${process.env.NODE_ENV} mode`
    );
  });