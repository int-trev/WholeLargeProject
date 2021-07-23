import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Scroll from '../components/Scroll';


function getNewUser()
{
  window.location.href = '/register'
}

const LoginPage = () =>
{

    return(
      <div>
        <PageTitle />
        <Login />
        <p>Don't have an account? Create one here!</p>
        <button  onClick={getNewUser}>Sign Up Here!</button>
      </div>
    );
};

export default LoginPage;
