import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav text-white bg-primary pl-5"><h1>Ironbeers App</h1></nav>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
