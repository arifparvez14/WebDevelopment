import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop'
import {BrowserRouter as Router, Switch, route, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Nav></Nav>
        <Route path="/about" component={About}></Route>
        <Route path="/shop" component={Shop}></Route>
    </div>
    </Router>
  );
}

export default App;
