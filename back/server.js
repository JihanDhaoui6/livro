
const app = require("./app");
const connectDatabase = require("./db/Database");
const http = require("http");

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error("Shutting down the server...");
  process.exit(1);
});

// Configuration
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "back/config/.env",
  });
}

// Connect to the database
connectDatabase().then(() => {
  console.log("MongoDB connected successfully");

  // Create HTTP server
  const server = http.createServer(app);

  // Start server
  const PORT = process.env.PORT || 7000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  // Handling unhandled promise rejections
  process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.error("Shutting down the server...");
    server.close(() => {
      process.exit(1);
    });
  });
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
  // Handle database connection error here
});
