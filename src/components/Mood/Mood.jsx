import "./Mood.css";
import { useState } from "react";
import Groq from "groq-sdk";
import MovieCards from "C:/Users/Ariyan/Desktop/FilmHorizon/src/components/HomePage/MovieCards.jsx";

function Mood({ favorites, setFavorites }) {
  const [moodMovies, setMoodMovies] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function handleSubmit() {
    if (!prompt.trim()) return;

    setLoading(true);
    setMoodMovies([]);
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Suggest 5 movies for someone feeling: ${prompt}. 
        Return ONLY the movie titles separated by commas.`,
        },
      ],
      model: "groq/compound",
    });

    const response = completion.choices[0].message.content;
    console.log(response);
    const titles = response.split(",").map((title) => title.trim());

    const movies = await Promise.all(
      titles.map(async (title) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(title)}`;

        const res = await fetch(url);
        const data = await res.json();

        return data.results[0];
      }),
    );
    const cleanMovies = movies.filter(Boolean);

    setMoodMovies(cleanMovies);
    setLoading(false);
  }

  return (
    <>
      <div className="mood">
        {loading && <p>Generating movie recommendations...</p>}
        Mood
        <div className="container">
          <input
            type="text"
            placeholder="How are you feeling?"
            size="20"
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>

      <div className="mood-container">
        <MovieCards
          movies={moodMovies}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </>
  );
}

export default Mood;
