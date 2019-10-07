import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { NavBar } from './Containers/NavBar';
import { Home } from './Containers/Home';
import Card from './Components/Card';
import './App.css';
import RentCollection from './Components/RentCollection';
import SellCollection from './Components/SellCollection';

function App() {
  return (
    <div>
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/for-sale' component={SellCollection} />
        <Route exact path='/for-rent' component={RentCollection} />
        <Route exact path='/card' component={Card} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
