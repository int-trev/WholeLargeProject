import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import Scroll from '../components/Scroll'

const LoginPage = () =>
{

    return(
      <div>
        <Scroll />
        <PageTitle />
        <div class = "background">
          <div class = "another">
            <Login />
          </div>
        </div>
      </div>
    );
};

export default LoginPage;
