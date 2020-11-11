import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';
import './App.css';
import CountyDetail from './components/CountyDetail';
import SearchBar from './components/SearchBar';
import CountyCardList from './components/CountyCardList';
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

/*
  Component representing the full Home Page
*/
function HomePage() {
  return (
    <main className="home-page">
      <SearchBar/>
      <div>
      </div>
    </main>
  );
}


/*
  Component representing the search page
*/
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

export default App;
