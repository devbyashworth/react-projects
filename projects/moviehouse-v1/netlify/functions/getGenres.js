const fetch = require("node-fetch");

exports.handler = async () => {
    try {
        const url = `${process.env.API_BASE_URL}/genre/movie/list?api_key=${process.env.API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("Error fetching genres:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error" }),
        };
    }
};
