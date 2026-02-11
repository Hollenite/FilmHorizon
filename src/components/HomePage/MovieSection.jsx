import { useState, useEffect } from "react";

function MoviesSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await fetch(`URL`);
      const json = await data.json();
      setMovies(json.results);
    }
    getMovies();
  }, []);

  return (
    <section className="movies-section">
      <h2>Popular Movies</h2>
      {/* your movie grid here later */}
    </section>
  );
}

export default MoviesSection;
