import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
