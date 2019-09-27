import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { NavBar } from './Containers/NavBar';
import { Home } from './Containers/Home';
import './App.css';
import  Buy  from './Containers/Buy';
import { Rent } from './Containers/Rent';

function App() {
  return (
    <div>
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/for-sale' component={Buy} />
        <Route exact path='/for-rent' component={Rent} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
