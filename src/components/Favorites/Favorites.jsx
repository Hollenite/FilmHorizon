import "./Favorites.css";
import MovieCards from "C:/Users/Ariyan/Desktop/FilmHorizon/src/components/HomePage/MovieCards.jsx";

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
    <div className="container">
      <h2>Your Favorites</h2>
      <button onClick={() => setFavorites([])}>Clear All</button>

      <MovieCards
        movies={favorites}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default Favorites;
