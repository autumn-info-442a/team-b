import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <div className="page-header">
      <h2>COVID-19 Cases Today Across the Country</h2>
      <p>BaseCheck wants to ensure that every person has the accessible opportunity to stay well-informed about the pandemic.</p>
      <div className="search-form">
        <form action={"/search/" + input}>
          <Autocomplete
            id="combo-box-demo"
            options={counties}
            getOptionLabel={(option) => option.title}
            value={input.title}
            onChange = {(e, option) => {
              setInput(option.title); 
            }}
            onInputChange={e => {
              setInput(e.target.value);
            }}
            style={{ width: '50em' }}
            renderInput={(params) => <TextField {...params} label="Search for a County in the United States" variant="outlined" />}
          />
        </form>
      </div>
      <a href={'/search/' + input} className="search-button">Search</a>
    </div>
  );
}

const counties = [
  { title: 'Orange'},
  { title: 'Clark'},
  { title: 'Snohomish'},
  { title: 'King'},
  { title: 'Washington'},
];