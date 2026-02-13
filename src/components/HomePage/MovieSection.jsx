import { useState } from "react";
import MovieCards from "./MovieCards";
import MovieModal from "./MovieModal";
import "./MovieSection.css";

function MoviesSection({ movies , favorites, setFavorites}) {
  const [clickedMovie, setClickedMovie] = useState(null);
  

  return (
    <section className="movies-section">
      <h2>Popular Movies</h2>
      {<MovieCards movies={movies} onMovieClick={setClickedMovie} favorites={favorites} setFavorites={setFavorites} />}

      {clickedMovie && (
        <MovieModal
          movie={clickedMovie}
          onClose={() => setClickedMovie(null)}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}
    </section>
  );
}

export default MoviesSection;
