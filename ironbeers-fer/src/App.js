import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Beers from './components/Beers/Beers.js';
import RandomBeer from './components/RandomBeer/RandomBeer.js';
import NewBeer from './components/NewBeer/NewBeer.js';
import BeerDetail from './components/BeerDetail/BeerDetail.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav text-white bg-primary pl-5"><h1>Ironbeers App</h1></nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/random-beer' component={RandomBeer}/>
          <Route exact path='/new-beer' component={NewBeer}/>
          <Route exact path="/beers/:id" component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
