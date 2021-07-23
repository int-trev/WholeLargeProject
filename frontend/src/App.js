import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import CreateCharacterPage from './pages/CreateChar';
import Register from './pages/Register';
import PasswordReset from './pages/PasswordResetPage';
import Verification from './pages/VerificationPage';
import Email from './pages/EmailPage'




function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/landing" exact>
          <LandingPage />
        </Route>

        <Route path = "/createcharacter" exact>
          <CreateCharacterPage />
        </Route>

        <Route path = "/passwordreset" exact>
          <PasswordReset />
        </Route>

        <Route path = "/verification" exact>
          <Verification />
        </Route>

        <Route path = "/register" exact>
          <Register />
        </Route>

        <Route path = "/emailpage" exact>
          <Email />
        </Route>

        <Redirect to="/" />
      </Switch>  
    </Router>
  );
}

export default App;
