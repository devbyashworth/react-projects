require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get("/api/data", async (req, res) => {
  try {
    const url = `${process.env.API_BASE_URL}/movie/550?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    // Respond with the fetched data
    res.json(data);
  } catch (error) {
    console.error("Error fetching API data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/genres", async (req, res) => {
  try {
    const url = `${process.env.API_BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    // Respond with the fetched data
    res.json(data);
  } catch (error) {
    console.error("Error fetching genres:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/trending", async (req, res) => {
  try {
    const url = `${process.env.API_BASE_URL}/trending/movie/week?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    // Respond with the fetched data
    res.json(data);
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/discover/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const url = `${process.env.API_BASE_URL}/discover/${category}?api_key=${process.env.API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    // Respond with the fetched data
    res.json(data);
  } catch (error) {
    console.error(`Error fetching ${category} movies:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
