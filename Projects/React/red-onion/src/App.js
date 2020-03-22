import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Header from './Components/Header/Header';
import Background from './Components/Background/Background';
import Items from './Components/Items/Items';
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Background></Background>
        <Items></Items>
    </div>
  );
}

export default App;
