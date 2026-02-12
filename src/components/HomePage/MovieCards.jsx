import React from "react";
import "./MovieCards.css";

function MovieCards({ movies, onMovieClick }) {
  function displayDate(date) {
    const arr = date.split("-");
    const year = arr[0];
    return year;
  }
  return (
    <>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            onClick={() => {
              onMovieClick(movie);
              console.log(movie.title);
            }}
            className="movie-cards"
            key={movie.id}
          >
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="info">
              {movie.vote_average.toFixed(1)}
              <div className="tooltip">
                Based on {movie.vote_count} votes
                <p></p>
                {displayDate(movie.release_date)}
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCards;
