// In your routes directory, create a new file called foodRoutes.js. This is where we will declare our routes

// SLIDE 6: Define the Routes
// In foodRoutes.js, use express.Router() to create a modular router. Use that router to declare two routes:
import express from "express";
const router = express.Router();

// A GET route at /soups that returns an array of strings that are soup names
// http://localhost:8080/foods/soups
router.get("/soups", (req, res) => {
  res.json(["Tomato Soup", "Chicken Soup", "Veggie Soup"]);
});

// A GET route at /salads that returns an array of strings that are the names of salads
// http://localhost:8080/foods/salads
const salads = ["ceaser", "greek"];
router.get("/salads", (req, res) => {
  res.json(salads);
});

// At the bottom of your foodRoutes.js file use export default to export your modular router
export default router;
