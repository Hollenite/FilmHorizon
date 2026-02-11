import React from "react";
import "./MovieCards.css";

function MovieCards({ movies, onMovieClick }) {
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
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCards;
