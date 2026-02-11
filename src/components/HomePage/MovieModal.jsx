import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-details">
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.overview}</p>
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
