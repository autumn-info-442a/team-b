import React, { useState } from 'react';

export default function SearchBar() {

    const [input, setInput] = useState("");
  
    return (
      <div className="page-header">
        <h2>COVID-19 Cases Today Across the Country</h2>
        <p>BaseCheck wants to ensure that every person has the accessible opportunity to stay well-informed about the pandemic.</p>
        <div>
          <input type="text" value={input} placeHolder="search for a county" onChange={e => setInput(e.target.value)} className="search"></input>
        </div>
        <a href={'/search/' + input} className="search-button">Search!</a>
      </div>
    );
}