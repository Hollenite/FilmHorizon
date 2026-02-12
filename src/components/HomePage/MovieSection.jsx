import { useState, useEffect } from "react";
import MovieCards from "./MovieCards";
import MovieModal from "./MovieModal";
import "./MovieSection.css";

function MoviesSection({movies, setMovies}) {
  const [clickedMovie, setClickedMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
      const data = await fetch(url);
      const json = await data.json();
      setMovies(json.results);
      console.log(json.results);
    }
    getMovies();
  }, []);

  return (
    <section className="movies-section">
      <h2>Popular Movies</h2>
      {<MovieCards movies={movies} onMovieClick={setClickedMovie} />}

      {clickedMovie &&  (
        <MovieModal movie={clickedMovie} onClose={()=> setClickedMovie(null)} />
      )}
    </section>
  );
}

export default MoviesSection;
