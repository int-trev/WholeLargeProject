import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Scroll from '../components/Scroll'

function getAbout()
{
  window.location.href = '/about';
}

const LoginPage = () =>
{

    return(
      <div>
        <Scroll />
        <PageTitle />
        <div className = "background">
          <div className = "another">
            <Login />
          </div>
          <h1>About Us</h1>
          <input type="submit" id="loginButton" class="buttons" value = "Do It"
          onClick={getAbout} />
        </div>
      </div>
    );
};

export default LoginPage;
