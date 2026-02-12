import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/mood'>Mood</Link>
      </div>
    </>
  );
}
export default NavBar;
