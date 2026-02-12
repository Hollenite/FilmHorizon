import { useEffect } from "react";
import "./MovieModal.css";

function MovieModal({ movie, onClose, setFavorites, favorites }) {
  const exist = favorites.some((fav) => fav.id === movie.id);
  function handleFav() {
    setFavorites((prev) => {
      if (exist) {
        return prev.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  }

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_user_personalization&w=740&q=80";
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <img src={imageUrl} alt={movie.title} />
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <p></p>
            <p>{movie.vote_average} / 10</p>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            <div className="modal-actions">
              <button className="trailer-button">Watch Trailer</button>
              <button
                className={exist ? "favorite-button active" : "favorite-button"}
                onClick={handleFav}
              >
                {exist ? "Remove From Favorites" : "Add to Favorites"}
              </button>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieModal;
