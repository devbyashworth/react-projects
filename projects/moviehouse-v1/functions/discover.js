// const fetch = require("node-fetch");

// exports.handler = async (event) => {
//   try {
//     const category = event.path.split("/").pop();
//     const url = `${process.env.API_BASE_URL}/discover/${category}?api_key=${process.env.API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     console.error(`Error fetching ${category} movies:`, error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Internal server error" }),
//     };
//   }
// };


const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiKey = process.env.API_KEY; // Retrieve the API key from environment variables
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch data' }) };
    }
};
