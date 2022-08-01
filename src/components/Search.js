import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <>
      {/* <h3 id="search-title">Find your Superhero</h3> */}
      <div className="searchbar">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </>
  );
}

export default Search;
