import React, { useState } from 'react';
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
          <Route path='/county/'></Route>
          <Route path='/search/'></Route>
          <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

function HomePage() {
    return (
      <main className="home-page">
        <div className="page-header">
          <h2>COVID-19 Cases Today Across the Country</h2>
          <p>BaseCheck wants to ensure that every person has the accessible opportunity to stay well-informed about the pandemic.</p>
        </div>
        <div>

        </div>
        <div>
          <p>You have 0 saved locations right now</p>
        </div>
        <div>

        </div>
      </main>
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
}

export default App;
