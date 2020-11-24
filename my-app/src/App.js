import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';
import './App.css';
import CountyDetail from './components/CountyDetail';
import SearchBar from './components/SearchBar';
import CountyCardList from './components/CountyCardList';
import { Toolbar } from '@material-ui/core';
import SavedCardList from './components/SavedCardList';

function App() {
  return (
    <Router>
      <header>
        <div className="nav-bar">
          <Toolbar className="tool-bar">
              <a className="baseCheck" href="/">BaseCheck</a>
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
  //localStorage.clear();
  const savedLocations = localStorage.getItem("counties");
  console.log(savedLocations);

  if (savedLocations) {
    const storedNames = JSON.parse(localStorage.getItem("counties"));
    console.log(storedNames);
    return (
      <main className="home-page">
        <SearchBar/>
        <SavedCardList counties={storedNames}/>
      </main>
    );
  } else {
    return (
      <main className="home-page">
        <SearchBar/>
        <div>
          <SavedCardList/>
        </div>
      </main>
    );
  }
  /*
  if (!localStorage.getItem("counties")) {
    let saved = [];
    localStorage.setItem("counties", JSON.stringify(saved));
  }

  console.log(localStorage.getItem("counties"));
  let savedLocations = JSON.parse(localStorage.getItem("counties"));
  */

}


/*
  Component representing the search page
*/
function SearchPage() {

  let { county } = useParams();
  const baseUri = "https://cors-anywhere.herokuapp.com/https://covercovid-19.com/search/" + county;
  const [counties, setCounties] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(baseUri, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Origin': 'http://localhost:3000'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      setCounties(responseData);
    })
    .then(() => {
      setLoaded(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  if (counties) {
    return (
      <main className="home-page">
        <SearchBar/>
        <CountyCardList counties={counties} loaded={loaded} search={county}/>
        <div>
        </div>
      </main>
    );
  } else {
    return <div></div>
  }
}

export default App;
