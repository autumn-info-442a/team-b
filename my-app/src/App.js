import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';
import './App.css';
import CountyDetail from './components/CountyDetail';
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
  console.log(props.counties);

  if (props.counties) {
    if (props.counties.length > 0) {
      let counties = props.counties.map((county) => {
        return <div><a href={"/county/" + county.county + "/" + county.province}>{county.county + ", " + county.province}</a></div>
      });
      return (
        <div className="list">
          <p>{props.counties.length} search results found for "{props.search}"</p>
        <div className="card-container">
          {counties}
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
      <div></div>
    );
  }
}

export default App;
