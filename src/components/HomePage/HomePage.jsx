import NavBar from "../HomePage/NavBar";
import Hero from "../HomePage/Hero";
import MoviesSection from "./MovieSection";

function HomePage({movies, setMovies, favorites, setFavorites}) {
  return (
    <>
      <Hero />
      <MoviesSection movies={movies} setMovies={setMovies} favorites={favorites} setFavorites={setFavorites}/>
    </>
  );
}

export default HomePage;
