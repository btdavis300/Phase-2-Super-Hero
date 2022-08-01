import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <>
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
