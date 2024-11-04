// In your server.js file, write the code to create a basic Express server, and also start it listening on port 8080

import express from "express";
import cors from "cors";

// Import the modular router that you exported from foodRoutes.js
import router from "./routes/foodRoutes.js"; //Did you mean to import "./routes/foodRoutes.js"?

// Create an instance of Express
const app = express();

// Enable CORS
app.use(cors());

// app.get("/", function (req, res) {
//   // path = req = URL at which the handler (a callback function) will be invoked
//   res.send("Welcome to /");
// });

// Use app.use() to mount your food router on to the path /foods
app.use("/foods", router);

const PORT = 8080;
app.listen(PORT, function () {
  console.log("Hello World");
  console.log(`Server is running on http://localhost:${PORT}`);
});

// http://localhost:8080/foods/soups

// GET http://localhost:8080/foods/soups
// Error: connect ECONNREFUSED 127.0.0.1:8080
// Request Headers
// User-Agent: PostmanRuntime/7.42.0
// Accept: */*
// Postman-Token: 99ce627f-e157-4d79-a311-2b1571e85f00
// Host: localhost:8080
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive
