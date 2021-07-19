import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import CreateCharacterPage from './pages/CreateChar';
import Register from './pages/Register';
//import PasswordReset from './pages/PasswordResetPage';
import Verification from './pages/VerificationPage';




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

        <Route path = "/createcharacter" exact>
          <CreateCharacterPage />
        </Route>



        <Route path = "/verification" exact>
          <Verification />
        </Route>

        <Route path = "/register" exact>
          <Register />
        </Route>

        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
