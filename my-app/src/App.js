import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';
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
          <Route path='/county/:county/:state'><CountyDetail/></Route>
          <Route path='/search/:county'><SearchPage/></Route>
          <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

function HomePage() {

  return (
    <main className="home-page">
      <SearchBar/>
      <div>
      </div>
    </main>
  );
}

function SearchBar() {

  const [input, setInput] = useState("");

  return (
    <div className="page-header">
      <h2>COVID-19 Cases Today Across the Country</h2>
      <p>BaseCheck wants to ensure that every person has the accessible opportunity to stay well-informed about the pandemic.</p>
      <form>
        <input type="text" value={input} placeHolder="search for a county" onChange={e => setInput(e.target.value)} className="search"></input>
      </form>
      <a href={'/search/' + input} className="search-button">Search!</a>
    </div>
  );
}

function SearchPage() {

  let { county } = useParams();
  const baseUri = "https://disease.sh/v3/covid-19/jhucsse/counties/";
  const [counties, setCounties] = useState([]);

  useEffect(() => {
    fetch(baseUri + county)
    .then((response) => response.json())
    .then((responseData) => {
      setCounties(responseData);
      console.log(responseData);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main className="home-page">
      <SearchBar/>
      <CountyCardList counties={counties} search={county}/>
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
          <img src="../error.jpg" alt="no results found"></img>
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

  let { county, state } = useParams();
  county = county.charAt(0).toUpperCase() + county.slice(1);
  state = state.charAt(0).toUpperCase() + state.slice(1);
  const [location, setLocation] = useState();
  const baseUri = "https://disease.sh/v3/covid-19/jhucsse/counties/";

  useEffect(() => {
    fetch(baseUri + county)
    .then((response) => response.json())
    .then((responseData) => {
      responseData.map((data) => {
        if (data.province === state) {
          setLocation(data);
          console.log(location);
        }
      });
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  /*
  if (location === null) {
    return (
      <p>Error: County does not exist!</p>
    )
  } else {
  */
  if (!location) {
    return (
      <main className="home-page">
        <SearchBar/>
        <div className="empty-header">
          <p>Looking for County Information...</p>
          <p>Taking too long? Likely the county does not exist in the state that you're looking for or our servers are down</p>
        </div>
      </main>
    );
  }
  return (
    <main className="more-info">
      <div className="county-page">
        <div className="county-header">
            <div>
              <a className="back" href={'/search/' + county}>Back</a>
            </div>
            <div>
              <h2>{county} County, {state}</h2>
              <p><b>Risk Level: {props.risk}</b></p>
            </div>
            <div className="favorite">
              <button >*</button>
            </div>
        </div>
        <div className="county-body">
          <div className="county-main">
            <div className="county-stats">
              <p>Confirmed Cases: {location ? location.stats.confirmed : "N/A"}</p>
              <p>Total Deaths: {location ? location.stats.deaths : "N/A"}</p>
              <p>Total Recovered: {location ? location.stats.recovered : "N/A"}</p>
              <p>Last Updated: {location ? location.updatedAt : "N/A"}</p>
            </div>
            <div className="county-visual"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
