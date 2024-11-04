// In your server.js file, write the code to create a basic Express server, and also start it listening on port 8080

import express from "express";
import cors from "cors";

// Import the modular router that you exported from foodRoutes.js
import router from "./routes/foodRoutes.js";

// Create an instance of Express
const app = express();
app.use(express.static("public"));

// SLIDE 9: Middleware in Express
// Create a middleware function in your server.js file that...
app.use((req, res, next) => {
  // log path that the request is targeting & time req. was received
  console.log(req.path, new Date());
  // CONSOLE: /foods/soups 2024-11-04T17:31:13.972Z
  next();
});

// Enable CORS
app.use(cors());

// Use app.use() to mount your food router on to the path /foods
app.use("/foods", router);

const PORT = 8085;
app.listen(PORT, function () {
  console.log("Hello World");
  console.log(`Server is running on http://localhost:${PORT}`);
});
