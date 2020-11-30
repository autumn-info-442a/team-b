import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';
import './App.css';
import CountyDetail from './components/CountyDetail';
import SearchBar from './components/SearchBar';
import CountyCardList from './components/CountyCardList';
import SavedCardList from './components/SavedCardList';
import { Toolbar } from '@material-ui/core';
import { Ring } from 'react-awesome-spinners';

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
  let baseUri = "https://cors-anywhere.herokuapp.com/https://covercovid-19.com/saved?";
  const savedLocations = JSON.parse(localStorage.getItem("counties"));

  if (savedLocations) {
    savedLocations.map((id) => {
      return baseUri += "ids[]=" + id + "&";
    });
  }

  baseUri = baseUri.slice(0, -1);

  console.log(baseUri);
  console.log(savedLocations);

  const [counties, setCounties] = useState([]);
  const [loaded, setLoaded] = useState(false);
  //const [loaded, setLoaded] = useState(true);

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
      console.log(responseData);
      setCounties(responseData);
    })
    .then(() => {
      setLoaded(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  if (savedLocations && savedLocations.length > 0) {
    return (
      <main className="home-page">
        <SearchBar/>
        <h2>Saved Locations:</h2>
        {loaded ? <SavedCardList counties={counties}/> : <Ring/>}
      </main>
    );
  } else {
    return (
      <main className="home-page">
        <SearchBar/>
        <div className="empty-list">
            <h2>No Saved Locations</h2>
        </div>
      </main>
    );
  }
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
      console.log(responseData);
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
