// 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SearchMovie.css"; // Import custom CSS

const SearchMovie = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // Fetch movies based on user search
  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=8509dd7f&s=${movieName}`
      );
      console.log("Search Results:", res.data);
      setMoviesData(res.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Fetch recommended Hollywood movies
  const fetchRecommendedMovies = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=8509dd7f&s=Hollywood`
      );
      console.log("Recommended Movies:", res.data);
      setRecommendedMovies(res.data.Search || []);
    } catch (error) {
      console.error("Error fetching recommended movies:", error);
    }
  };

  // Fetch recommendations when the component mounts
  useEffect(() => {
    fetchRecommendedMovies();
  }, []);

  return (
    <div className="search-container">
      <h1 className="search-title">Find Your Favorite Movies</h1>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          onChange={(event) => setMovieName(event.target.value)}
          placeholder="Enter movie name..."
        />
        <button onClick={fetchMovies} className="search-btn">
          Search
        </button>
      </div>

      {/* Display Search Results (if any) */}
      {moviesData.length > 0 && (
        <div className="container mt-4">
          <h2 className="section-title">Search Results</h2>
          <div className="row">
            {moviesData.map((movie) => (
              <div className="col-md-3" key={movie.imdbID}>
                <div className="movie-card">
                  <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img
                      src={movie.Poster}
                      className="movie-img"
                      alt="Movie Poster"
                    />
                  </Link>
                  <div className="movie-info">
                    <h5>{movie.Title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display Recommended Movies */}
      <div className="container mt-4">
        <h2 className="section-title">Recommended Hollywood Movies</h2>
        <div className="row">
          {recommendedMovies.map((movie) => (
            <div className="col-md-3" key={movie.imdbID}>
              <div className="movie-card">
                <Link to={`/moviedetail/${movie.imdbID}`}>
                  <img
                    src={movie.Poster}
                    className="movie-img"
                    alt="Movie Poster"
                  />
                </Link>
                <div className="movie-info">
                  <h5>{movie.Title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
