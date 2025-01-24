require("dotenv").config();
const fetch = require("node-fetch");

const handler = async (event) => {
  const { path, queryStringParameters } = event;
  const apiBase = process.env.API_BASE_URL;
  const apiKey = process.env.API_KEY;

  let url;

  if (path.includes("genres")) {
    url = `${apiBase}/genre/movie/list?api_key=${apiKey}`;
  } else if (path.includes("trending")) {
    url = `${apiBase}/trending/movie/week?api_key=${apiKey}`;
  } else if (path.includes("discover")) {
    const category = queryStringParameters.category || "movie";
    url = `${apiBase}/discover/${category}?api_key=${apiKey}`;
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Endpoint not found" }),
    };
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching API data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

module.exports = { handler };
