import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import './App.css';
import { Buy } from './Components/Buy';
import { Rent } from './Components/Rent';

function App() {
  return (
    <div>
    <Router>
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
