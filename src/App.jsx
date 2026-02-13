import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/HomePage/NavBar";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Mood from "./components/Mood/Mood";

function App() {
  async function fetchQuery(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setMovies(json.results);
  }

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  // const [mood, setMood] = useState([]);

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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <NavBar fetchQuery={fetchQuery} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              movies={movies}
              setMovies={setMovies}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mood" element={<Mood />} />
      </Routes>
    </>
  );
}

export default App;
