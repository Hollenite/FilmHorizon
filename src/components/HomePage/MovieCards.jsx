import React from "react";
import "./MovieCards.css";

function MovieCards({ movies, onMovieClick, favorites, setFavorites }) {
  function displayDate(date) {
    if (!date) return "N/A";
    const arr = date.split("-");
    const year = arr[0];
    return year;
  }
  movies = movies.filter((movie) => movie.poster_path);

  return (
    <>
      <div className="movie-grid">
        {movies.map((movie) => {
          const exist = favorites.some((fav) => fav.id === movie.id);
          const imageUrl = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_user_personalization&w=740&q=80";
          return (
            <div
              onClick={() => {
                onMovieClick(movie);
                console.log(movie.title);
              }}
              className="movie-cards"
              key={movie.id}
            >
              <img className="movie-image" src={imageUrl} alt={movie.title} />
              <div className="info">
                {movie.vote_average.toFixed(1)}
                <p></p>
                {exist && (
                  <button
                    className="fav-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (exist) {
                        setFavorites((prev) =>
                          prev.filter((fav) => fav.id !== movie.id),
                        );
                      } else {
                        setFavorites((prev) => [...prev, movie]);
                      }
                    }}
                  >
                    ❤️
                  </button>
                )}
                <div className="tooltip">
                  Based on {movie.vote_count} votes
                  <p></p>
                  {displayDate(movie.release_date)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieCards;
