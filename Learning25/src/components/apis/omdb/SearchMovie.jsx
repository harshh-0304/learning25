import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./SearchMovie.css"; // Import custom CSS

const SearchMovie = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [recommendedHollywood, setRecommendedHollywood] = useState([]);
  const [recommendedMarvel, setRecommendedMarvel] = useState([]);
  const [recommendedBollywood, setRecommendedBollywood] = useState([]);
  const [recommendedAction, setRecommendedAction] = useState([]);
  const [recommendedAdventure, setRecommendedAdventure] = useState([]);

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

  // Fetch recommended movies based on genre
  const fetchRecommendedMovies = async (genre, setState) => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=8509dd7f&s=${genre}`
      );
      console.log(`Recommended ${genre} Movies:`, res.data);
      setState(res.data.Search || []);
    } catch (error) {
      console.error(`Error fetching ${genre} movies:`, error);
    }
  };

  // Fetch recommendations when the component mounts
  useEffect(() => {
    fetchRecommendedMovies("Hollywood", setRecommendedHollywood);
    fetchRecommendedMovies("Marvel", setRecommendedMarvel);
    fetchRecommendedMovies("Bollywood", setRecommendedBollywood);
    fetchRecommendedMovies("Action", setRecommendedAction);
    fetchRecommendedMovies("Adventure", setRecommendedAdventure);
  }, []);

  // Helper function to render movie cards
  const renderMovieCards = (movies) => {
    return movies.map((movie) => (
      <div className="col-md-2" key={movie.imdbID}>
        <div className="card custom-card">
          <Link to={`/moviedetail/${movie.imdbID}`}>
            <img 
              src={movie.Poster} 
              className="card-img-top custom-img" 
              alt="Movie Poster" 
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.imdbID}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="search-page">
      {/* Main container with dark background & centered content */}
      <h1>pick you're poison</h1>
      <input 
        type="text" 
        onChange={(event) => setMovieName(event.target.value)} 
        placeholder="Enter movie name"
      />
      <br /><br />
      <button onClick={fetchMovies} className="search-btn">Search</button>

      {/* Display Search Results (if any) */}
      {moviesData.length > 0 && (
        <div className="container mt-4">
          <h2>Search Results</h2>
          <div className="row">
            {renderMovieCards(moviesData)}
          </div>
        </div>
      )}

      {/* Display Recommended Hollywood Movies (only 6 movies) */}
      <div className="container mt-4">
        <h2>Recommended Hollywood Movies</h2>
        <div className="row">
          {renderMovieCards(recommendedHollywood.slice(0, 6))}
        </div>
      </div>

      {/* Display Recommended Marvel Movies (only 6 movies) */}
      <div className="container mt-4">
        <h2>Recommended Marvel Movies</h2>
        <div className="row">
          {renderMovieCards(recommendedMarvel.slice(0, 6))}
        </div>
      </div>

      {/* Display Recommended Bollywood Movies (only 6 movies) */}
      <div className="container mt-4">
        <h2>Recommended Bollywood Movies</h2>
        <div className="row">
          {renderMovieCards(recommendedBollywood.slice(0, 6))}
        </div>
      </div>

      {/* Display Recommended Action Movies (only 6 movies) */}
      <div className="container mt-4">
        <h2>Recommended Action Movies</h2>
        <div className="row">
          {renderMovieCards(recommendedAction.slice(0, 6))}
        </div>
      </div>

      {/* Display Recommended Adventure Movies (only 6 movies) */}
      <div className="container mt-4">
        <h2>Recommended Adventure Movies</h2>
        <div className="row">
          {renderMovieCards(recommendedAdventure.slice(0, 6))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
