import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './Components/SignUp/useAuth';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';


function App() {

    return (
        <AuthProvider>
            <Router>
                <div className="main">
                    <Switch>
                        <Route exact path="/">
                            <Header></Header>
                            <Banner></Banner>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
