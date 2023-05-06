import React, { useState } from "react";

export default function SearchEngine(props) {
  const [newCity, setNewCity] = useState(props.defaultCity);
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setNewCity(event.targen.value);
  }

  return (
    <div className="searchEngine">
      <form id="city-input" onSubmit={handleSubmit}>
        <input
          className="search-line"
          type="search"
          placeholder="Search"
          id="search-new-city"
          onChange={handleCityChange}
        />
        <input className="search-button" type="Submit" placeholder="🔍" />
      </form>
    </div>
  );
}
