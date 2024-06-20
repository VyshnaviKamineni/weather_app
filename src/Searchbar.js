import React from 'react';

const SearchBar = ({ city, onCityChange, onSearch }) => {
  return (
    <div className="search-bar">
      <input type="text" value={city} onChange={onCityChange} placeholder="Enter city" />
      <button onClick={onSearch}>Get Weather</button>
    </div>
  );
};

export default SearchBar;
