import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Scroll from '../components/Scroll';

function getAbout()
{
  window.location.href = '/about';
}

function getNewUser()
{
  window.location.href = '/register'
}

const LoginPage = () =>
{

    return(
      <div>
        <Scroll />
        <PageTitle />
        
          <div className = "another">
            <Login />
          </div>
          <h1>About Us</h1>
          <button  onClick={getAbout}>About Us</button>
          <p>Don't have an account? Create one here!</p>
          <button  onClick={getNewUser}>Sign Up Here!</button>
      </div>
    );
};

export default LoginPage;
