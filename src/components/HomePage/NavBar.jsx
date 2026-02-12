import "./NavBar.css";
import { useState } from "react";

function NavBar({fetchQuery}) {
  return (
    <>
      <nav className="nav-bar">
        <SearchBar className="search-bar" fetchQuery={fetchQuery} />
        <Buttons className="buttons" />
      </nav>
    </>
  );
}

function SearchBar({ className, fetchQuery }) {
  const [query, setQuery] = useState("");

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (query.trim() === "") {
              return;
            }
            fetchQuery(query);
          }
        }}
      />
    </div>
  );
}
function Buttons({ className }) {
  return (
    <>
      <div className={className}>
        <button className="Home">Home</button>
        <button className="Favorites">Favorities</button>
        <button className="mood">Mood</button>
      </div>
    </>
  );
}
export default NavBar;
