import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Scroll from '../components/Scroll';


const LoginPage = () =>
{

    return(
      <div>
        <PageTitle />
        <Login />
      </div>
    );
};

export default LoginPage;
