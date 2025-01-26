require("dotenv").config();
const express = require("express");
const path = require("path");

// Fetch import for Node.js versions < 18
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to MovieHouse</h1><p>Please check your setup.</p>");
});

// Fetch movie data by ID
app.get("/api/data", async (req, res) => {
  try {
    const url = `${process.env.API_BASE_URL}/movie/550?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching API data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch genres
app.get("/api/genres", async (req, res) => {
  try {
    const url = `${process.env.API_BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching genres:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch trending movies
app.get("/api/trending", async (req, res) => {
  try {
    const url = `${process.env.API_BASE_URL}/trending/movie/week?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Discover category
app.get("/api/discover/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const url = `${process.env.API_BASE_URL}/discover/${category}?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(`Error fetching ${req.params.category} movies:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
