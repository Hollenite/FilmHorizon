import "./MovieModal.css";

function MovieModal({ movie, onClose }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?semt=ais_user_personalization&w=740&q=80";
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <img
            src={imageUrl}
            alt={movie.title}
          />
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <p></p>
            <p>{movie.vote_average} / 10</p>
            <p>{movie.release_date}</p>
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
