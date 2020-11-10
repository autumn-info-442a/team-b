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
      <input type="text" value={input} placeHolder="search for a county" onChange={e => setInput(e.target.value)} className="search"></input>
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
  const [hasCounty, setHasCounty] = useState(false);
  const requestUri = "https://cors-anywhere.herokuapp.com/https://covercovid-19.com/county/" + county + "/" + state;

  useEffect(() => {
    fetch(requestUri).then((response) => response.json())
    .then((responseData) => {
      let data = responseData[0];
      setLocation(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  if (!location) {
    return (
      <div></div>
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
            <p>Total Cases: <b>{location ? location["cnt"] : "N/A"}</b></p>
            <p>New Cases (2 Weeks): <b>{location ? location["2wd"] : "N/A"}</b></p>
            <p>New Cases (1 Week): <b>{location ? location["1wd"] : "N/A"}</b></p>
            <p>New Cases (1 Day): <b>{location ? location["1dd"] : "N/A"}</b></p>
            <p>Last Updated: <b>{location ? location.date.split(" ")[0] : "N/A"}</b></p>
          </div>
          <div className="county-visual"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
