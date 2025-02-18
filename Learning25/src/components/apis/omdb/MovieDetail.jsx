import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../assets/Moviedetail.css"; // Ensure this path is correct

const MovieDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&i=${id}`);
        setDetail(res.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetail();
  }, [id]);

  if (loading) return <h2 className="loading-text">Loading...</h2>;

  return (
    <div className="movie-detail-container">
      <div className="movie-header">
        <div className="movie-poster">
          <img src={detail?.Poster} alt={detail?.Title} />
        </div>
        <div className="movie-info">
          <h1>{detail?.Title} ({detail?.Year})</h1>
          <p><strong>IMDb Rating:</strong> {detail?.imdbRating}/10</p>
          <p><strong>Director:</strong> {detail?.Director}</p>
          <p><strong>Writer:</strong> {detail?.Writer}</p>
          <p><strong>Stars:</strong> {detail?.Actors}</p>
          <p><strong>Runtime:</strong> {detail?.Runtime}</p>
          <p><strong>Released:</strong> {detail?.Released}</p>
          <p><strong>Country:</strong> {detail?.Country}</p>
          <p><strong>Language:</strong> {detail?.Language}</p>
        </div>
      </div>
      <div className="movie-plot">
        <h2>Plot</h2>
        <p>{detail?.Plot}</p>
      </div>
      <div className="movie-additional-info">
        <div className="rent-buy">
          <p>RENT/BUY</p>
          <div className="rent-buy-option">
            <img src="https://images.indianexpress.com/2022/11/prime-video-disable-ads.jpg?w=414" alt="Rent or Buy" />
            <p>from Rs.199</p>
          </div>
        </div>
        <button className="watchlist-button">
          <h2 className="bi bi-plus"></h2>
          <div>
            <strong>Add to watchlist</strong>
            <br />
            <i>added by 612k users</i>
          </div>
        </button>
        <div className="reviews">
          <p><strong>3.8K</strong> User reviews</p>
          <p><strong>386</strong> Critic reviews</p>
        </div>
      </div>
      <div className="movie-awards">
        <p>Awards: {detail?.Awards}</p>
        <h5 className="bi bi-chevron-right"></h5>
      </div>
      <div className="movie-details">
        <h2>Details</h2>
        <p>Release Date: <span>{detail?.Released}</span></p>
        <p>Country of Origin: <span>{detail?.Country}</span></p>
        <p>Languages: <span>{detail?.Language}</span></p>
        <p>Genre: <span>{detail?.Genre}</span></p>
        <p>Box Office Collection: <span>{detail?.BoxOffice}</span></p>
        <p>Official Website: <span>{detail?.Website}</span></p>
      </div>
    </div>
  );
};

export default MovieDetails;
