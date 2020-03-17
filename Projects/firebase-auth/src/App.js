import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'

firebase.initializeApp(firebaseConfig);

function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  });

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);
        console.log(displayName, photoURL, email);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }
  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
          password: '',
          isValid: false
        }
        setUser(signedOutUser);
      }).catch(err => {

      });
  }

  const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  const hasNumber = input => /\d/.test(input);

  const handleChange = event => {
    const newUserInfo = {
      ...user
    }

    let isValid = true;
    if (event.target.name === 'email'){
      isValid = is_valid_email(event.target.value);
    }

    let isValidPassword = true;
    if (event.target.name === 'password'){
      isValid = event.target.value > 8 && hasNumber(event.target.value);
    }

    newUserInfo[event.target.name] = event.target.value;
    newUserInfo.isValid = isValid
    setUser(newUserInfo);
  }

  const createAccount = () => {
    if(user.isValid){
      console.log(user.email, user.password);
    } else {
      console.log('Form is not valid');
    }
  }

  return (
    <div className="App">
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleSignIn}>Sign in</button>
      }
      {
        user.isSignedIn &&
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }
      <h1>Our own authentication</h1>

      <form onSubmit={createAccount}>
        <input type="text" onBlur={handleChange} name="email" placeholder="Your Email" required />
        <br />
        <input type="password" onBlur={handleChange} name="password" placeholder="Your Password" required />
        <br />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}

export default App;
