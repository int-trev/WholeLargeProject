import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/cards" exact>
          <CardPage />
        </Route>

        <Route path="/landing" exact>
          <LandingPage />
        </Route>

        <Route path = "/about" exact>
          <AboutUs />
        </Route>
        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
