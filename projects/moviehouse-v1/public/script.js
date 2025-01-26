document.addEventListener("DOMContentLoaded", () => {
  const movieName = document.querySelector(".display-movie .movie-name");
  const description = document.querySelector(".display-movie .description");
  const genre = document.querySelector(".display-movie .genres");
  const releaseDate = document.querySelector(".display-movie .release-date");
  const rating = document.querySelector(".display-movie .rating");
  const originals = document.querySelector("#originals .content");
  const trending = document.querySelector("#trending .content");
  const tvShows = document.querySelector("#tv-shows .content");
  const movies = document.querySelector("#movies-category .content");
  const banner = document.querySelector(".banner");
  const year = document.querySelector(".year");

  // const API_BASE_URL = "http://localhost:3000/api"; // Node.js server URL
  const API_BASE_URL = "/.netlify/functions"; // Netlify serverless functions base URL


  // const apiKey = "your_api_key"; // Replace with your actual API key
  const itemsPerPage = 5;
  let allGenres = [];

  // Utility: Truncate Sentence
  const truncate = (sentence, maxLength) =>
    sentence?.length > maxLength
      ? sentence.slice(0, maxLength) + "..."
      : sentence;

  // Set Current Year
  year.textContent = new Date().getFullYear();

  // Fetch Data Utility
  const getMoviesData = async (url) => {
    try {
      console.log(`Fetching data from: ${url}`);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      console.log("Fetched data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  // Fetch Genres Once
  const fetchGenres = async () => {
    // const url = `${API_BASE_URL}/genres?api_key=${apiKey}`;
    const url = `${API_BASE_URL}/getGenres`;
    const data = await getMoviesData(url);
    allGenres = data?.genres || [];
    console.log("Fetched genres:", allGenres);
  };

  // Update Banner
  const updateBanner = async () => {
    try {
      const data = await getMoviesData(
        `${API_BASE_URL}/trending?api_key=${apiKey}`
      );
      // const data = await getMoviesData(`${API_BASE_URL}/getTrending`);
      if (!data || !data.results.length) throw new Error("No trending data");

      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path || ""
        })`;
      movieName.textContent =
        randomMovie.title || randomMovie.name || "Untitled";
      description.textContent =
        truncate(randomMovie.overview, 250) || "No description available";
      releaseDate.textContent = `Release Date: ${randomMovie.release_date || "N/A"
        }`;
      rating.textContent = `Rating: ${randomMovie.vote_average || "N/A"}`;
      genre.textContent = `Genres: ${randomMovie.genre_ids
        .map((id) => allGenres.find((g) => g.id === id)?.name)
        .filter(Boolean)
        .join(", ") || "Unknown"
        }`;
    } catch (error) {
      console.error(error);
      banner.style.backgroundImage = "url('fallback-banner.jpg')";
      movieName.textContent = "No data available";
      description.textContent = "Try again later.";
    }
  };

  // Display Movies
  const displayMovies = async (endpoint, container) => {
    container.innerHTML = "";
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.textContent = "Loading...";
    container.appendChild(loader);

    try {
      console.log(`Fetching movies from: ${endpoint}`);
      const data = await getMoviesData(endpoint);
      if (!data) throw new Error("Failed to fetch movies");

      container.innerHTML = "";
      data.results.slice(0, itemsPerPage).forEach((movie) => {
        const imgSrc = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "fallback-image.jpg";
        const movieElement = document.createElement("div");
        movieElement.className = "movie-container";
        movieElement.innerHTML = `
            <div class="movie-img">
              <img src="${imgSrc}" alt="${movie.title || movie.name || "Untitled"
          }">
            </div>
            <div class="movie-info">
              <h2>${movie.title || movie.name || "Untitled"}</h2>
              <p>Rating: ${movie.vote_average || "N/A"}</p>
              <p>Genres: ${movie.genre_ids
            .map((id) => allGenres.find((g) => g.id === id)?.name)
            .filter(Boolean)
            .join(", ") || "Unknown"
          }</p>
            </div>`;
        container.appendChild(movieElement);
      });
    } catch (error) {
      console.error(error);
      container.innerHTML = `<p class="error-message">Failed to load movies.</p>`;
    }
  };

  // Initial Setup
  (async () => {
    await fetchGenres();
    updateBanner();
    setInterval(updateBanner, 6000);

    displayMovies(`${API_BASE_URL}/discover/movie`, originals);
    displayMovies(`${API_BASE_URL}/discover/tv`, tvShows);
    // displayMovies(
    //   `${API_BASE_URL}/discover/movie?api_key=${apiKey}`,
    //   originals
    // );
    displayMovies(`${API_BASE_URL}/trending?api_key=${apiKey}`, trending);
    // displayMovies(`${API_BASE_URL}/discover/tv?api_key=${apiKey}`, tvShows);
    displayMovies(`${API_BASE_URL}/discover/movie?api_key=${apiKey}`, movies);

  })();
});
