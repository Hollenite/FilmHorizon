import NavBar from "../HomePage/NavBar";
import Hero from "../HomePage/Hero";
import MoviesSection from "./MovieSection";
import { useState } from "react";

function HomePage() {
  const [movies, setMovies] = useState([]);
  async function fetchQuery(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setMovies(json.results);
  }
  return (
    <>
      <NavBar fetchQuery={fetchQuery} />
      <Hero />
      <MoviesSection movies={movies} setMovies={setMovies} />
    </>
  );
}

export default HomePage;
