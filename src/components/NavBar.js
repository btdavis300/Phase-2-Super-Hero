import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = ({ onSearchChange, searchTerm, onGoBack }) => {
  return (
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/sortby">Sort By</Link>
      <Link to="/MYO">Make Your Own</Link>
      <Search onSearchChange={onSearchChange} searchTerm={searchTerm} />
    </div>
  );
};

export default NavBar;

// onClick={onGoBack}
