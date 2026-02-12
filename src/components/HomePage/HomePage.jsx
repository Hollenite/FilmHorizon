import NavBar from "../HomePage/NavBar";
import Hero from "../HomePage/Hero";
import MoviesSection from "./MovieSection";

function HomePage({movies, setMovies}) {
  return (
    <>
      <Hero />
      <MoviesSection movies={movies} setMovies={setMovies} />
    </>
  );
}

export default HomePage;
