import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

/*
  Component that represents the search bar. Enables autocomplete based on the County names in the US
*/
export default function SearchBar() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (input.length > 0) {
      setOpen(true);
    }
  }
  const handleInputChange = (event, newInputValue) => {
    setInput(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  const [counties, setCounties] = useState([]);
  const requestUri = "https://cors-anywhere.gradyt.com/https://covercovid-19.com/locations";
  
  useEffect(() => {
    fetch(requestUri).then((response) => response.json())
    .then((responseData) => {
      // Removes autauga from search results
      responseData.shift();
      setCounties(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="page-header">
      <h2>COVID-19 Cases Today Across the United States</h2>
      <p className="subtext">BaseCheck wants to ensure that every person has the accessible opportunity to stay well-informed about the pandemic.</p>
      <div className="search-form">
        <Autocomplete
          id="combo-box-demo"
          open={open}
          onOpen={handleOpen}
          onClose={() => setOpen(false)}
          options={counties}
          freeSolo={true}
          disableClearable={true}
          getOptionLabel={(option) => option.title}
          onChange = {(e, option) => {
            if (option !== null) {
              setInput(option.title); 
              document.getElementById("combo-box-demo").value = option.title;
            }
          }}
          onInputChange={handleInputChange}
          autoComplete={true}
          style={{ width: '50em' }}
          renderInput={(params) => <TextField {...params} label='&#128269; Search for a US county' variant="outlined" />}
        />
        {input ? <a href={'/search/' + input} className="search-button">Search</a> : <span className="search-button-disabled">Search</span>}
      </div>
      <p>Type in a county name and press the search button to find your county!</p>
    </div>
  );
}