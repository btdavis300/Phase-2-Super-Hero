import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = ({ onSearchChange, searchTerm }) => {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/categories">Categories</Link>
      <Search onSearchChange={onSearchChange} searchTerm={searchTerm} />
    </div>
  );
};

export default NavBar;
