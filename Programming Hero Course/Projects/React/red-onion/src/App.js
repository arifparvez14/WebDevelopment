import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from './Components/Signup/Signup';
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/">
            <Items></Items>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
