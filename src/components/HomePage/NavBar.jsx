import "./NavBar.css";
function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <SearchBar className="search-bar" />
        <Buttons className="buttons" />
      </nav>
    </>
  );
}

function SearchBar({ className }) {
  return (
    <div className={className}>
      <input type="text" placeholder="Search for a movie..." />
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
