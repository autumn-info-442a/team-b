import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import { Toolbar } from '@material-ui/core';

function App() {
  return (
    <Router>
      <header>
        <div className="nav-bar">
          <Toolbar className="tool-bar">
              <h1>BaseCheck</h1>
              <a className="tool-link" href="/">Home</a>
          </Toolbar>
        </div>
      </header>
      <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route path='/county/'><CountyDetail/></Route>
          <Route path='/search/'></Route>
          <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

function HomePage() {

  const baseUri = "https://disease.sh/v3/covid-19/jhucsse/counties/";
  const [search, setSearch] = useState("");
  const [counties, setCounties] = useState([]);
  const [input, setInput] = useState("");

  async function handleSearch() {
    await fetch(baseUri + input)
    .then((response) => response.json())
    .then((responseData) => {
      setSearch(input);
      setCounties(responseData);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <main className="home-page">
      <div className="page-header">
        <h2>COVID-19 Cases Today Across the Country</h2>
        <p>BaseCheck wants to ensure that every person has the accessible opportunity to stay well-informed about the pandemic.</p>
        <input type="text" value={input} placeHolder="search for a county" onChange={e => setInput(e.target.value)} className="search"></input>
        <button className="search-button" onClick={handleSearch}>Search!</button>
      </div>
      {search !== "" ? <CountyCardList counties={counties} search={search}/> : <CountyCardList/>}
      <div>
      </div>
    </main>
  );
}

/*
  Component that will act a a container to hold each CountyCard Component.
*/
function CountyCardList(props) {
  if (props.counties) {
    if (props.counties.length > 0) {
      return (
        <div className="list">
          <p>{props.counties.length} search results found for "{props.search}"</p>
        <div className="card-container">
  
        </div>
      </div>
      );
    } else {
      return (
        <div className="empty-list">
          <p>Unfortunately, we have no results for "{props.search}"</p>
          <img src="error.jpg"></img>
        </div>
      );
    }
  } else  {
    return (
      <p>Hello!</p>
    );
  }
}

/*
  Component that represents a County Page.
*/
function CountyDetail(props) {
  return (
    <main className="county-page">
      <div className="county-header">
          <h2>{props.county} County, {props.state}</h2>
          <p><b>Risk Level: {props.risk}</b></p>
      </div>
      <div className="county-body">
        <div className="county-main">
          <div className="county-stats">
            <p>New Cases (1 Day): </p>
            <p>New Cases (7 Days):</p>
            <p>Total Cases:</p>
            <p>Total Deaths:</p>
            <p>Last Updated: 12 hours ago</p>
          </div>
          <div className="county-visual"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
