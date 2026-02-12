import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/HomePage/NavBar";
import {useState, useEffect} from "react";

function App() {
    async function fetchQuery(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setMovies(json.results);
  }

    const [movies, setMovies] = useState([]);

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
    <>
    <NavBar fetchQuery={fetchQuery} />
    <HomePage movies={movies} setMovies={setMovies} />
    </>
  )
}

export default App;
