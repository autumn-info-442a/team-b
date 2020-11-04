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
          <Route path='/county/'><CountyDetail/></Route>
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
      <CountyCardList/>
      <div>

      </div>
    </main>
  );
}

/*
  Component that will act a a container to hold each CountyCard Component.
*/
function CountyCardList() {
  return (
    <div>
      <p>You have 0 saved locations right now</p>
      <div>

      </div>
    </div>
  );
}

/*
  Component that represents a County Page.
*/
function CountyDetail() {
  return (
    /*
    <main>
    </main>
    */
    <main className="county-page">
      <div className="county-header">
          <h2>King County, WA</h2>
          <p><b>Risk Level: High</b></p>
      </div>
      <div className="county-body">
        <div className="county-main">
          <div className="county-stats">
            <p>New Cases (1 Day):</p>
            <p>New Cases (7 Days):</p>
            <p>Total Cases:</p>
            <p>Total Deaths:</p>
            <p>Last Updated: 12 hours ago</p>
          </div>
          <div className="county-visual"></div>
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default App;
