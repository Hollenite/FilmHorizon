import { useState } from "react";
import MovieCards from "./MovieCards";
import MovieModal from "./MovieModal";
import "./MovieSection.css";

function MoviesSection({ movies }) {
  const [clickedMovie, setClickedMovie] = useState(null);

  return (
    <section className="movies-section">
      <h2>Popular Movies</h2>
      {<MovieCards movies={movies} onMovieClick={setClickedMovie} />}

      {clickedMovie && (
        <MovieModal
          movie={clickedMovie}
          onClose={() => setClickedMovie(null)}
        />
      )}
    </section>
  );
}

export default MoviesSection;
