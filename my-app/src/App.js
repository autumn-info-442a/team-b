import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import { AppBar, Toolbar } from '@material-ui/core';

function App() {
  return (
    <Router>
      <AppBar position="fixed">
        <Toolbar className="tool-bar">
            <h1>BaseCheck</h1>
            <a className="tool-link" href="/">Home</a>
        </Toolbar>
      </AppBar>
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
    );
}

export default App;
