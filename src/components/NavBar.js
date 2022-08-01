import React from "react";

function NavBar({ searchTerm, onSearchChange }) {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#favorites">Favorites</a>
      <a href="#categories">Categories</a>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default NavBar;
