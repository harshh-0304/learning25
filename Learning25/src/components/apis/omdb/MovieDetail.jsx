// 
// 
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
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

  if (loading) return <h2 style={{ textAlign: "center", color: "white" }}>Loading...</h2>;

  return (
    <div style={{ ...styles.background, backgroundImage: `url(${detail?.Poster})` }}>
      <div style={styles.overlay}>
        {/* Left: Movie Poster */}
        <div style={styles.posterContainer}>
          <img src={detail?.Poster} alt={detail?.Title} style={styles.poster} />
        </div>

        {/* Right: Movie Details */}
        <div style={styles.detailsContainer}>
          <h1 style={styles.title}>{detail?.Title} ({detail?.Year})</h1>
          <p style={styles.text}><strong>⭐ IMDb Rating:</strong> {detail?.imdbRating}/10</p>
          <p style={styles.text}><strong>🎬 Director:</strong> {detail?.Director}</p>
          <p style={styles.text}><strong>✍️ Writer:</strong> {detail?.Writer}</p>
          <p style={styles.text}><strong>🎭 Cast:</strong> {detail?.Actors}</p>
          <p style={styles.text}><strong>⏳ Runtime:</strong> {detail?.Runtime}</p>
          <p style={styles.text}><strong>📅 Released:</strong> {detail?.Released}</p>
          <p style={styles.text}><strong>🌍 Country:</strong> {detail?.Country}</p>
          <p style={styles.text}><strong>🗣 Language:</strong> {detail?.Language}</p>
          <p style={styles.plot}><strong>📖 Plot:</strong> {detail?.Plot}</p>
        </div>
      </div>
    </div>
  );
};

// 🎨 CSS-in-JS Styling
const styles = {
  background: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    width: "90%",
    maxWidth: "1000px",
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Dark overlay for readability
    color: "white",
    display: "flex",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    flexWrap: "wrap",
  },
  posterContainer: {
    flex: "1",
    textAlign: "center",
  },
  poster: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
  },
  detailsContainer: {
    flex: "2",
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  plot: {
    fontSize: "14px",
    marginTop: "10px",
    lineHeight: "1.5",
    color: "#bbb",
  },
};

export default MovieDetail;
