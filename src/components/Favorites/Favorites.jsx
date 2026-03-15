import "./Favorites.css";
import MovieCards from "../HomePage/MovieCards.jsx";

function Favorites({ favorites, setFavorites }) {
  if (favorites.length === 0) {
    return (
      <div className="container">
        <h2>No favorites yet</h2>
        <p>Add some movies to see them here.</p>
      </div>
    );
  }

  return (
    <>
      <div className="favorites-container">
        <h2>Favorities</h2>
        <button className="clear-button" onClick={() => setFavorites([])}>
          Clear All
        </button>
      </div>

      <div className="container">
        <MovieCards
          movies={favorites}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </>
  );
}

export default Favorites;
