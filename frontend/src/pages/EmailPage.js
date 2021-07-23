import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Email from '../components/EmailPageUI';
import Scroll from '../components/Scroll';


const LoginPage = () =>
{

    return(
      <div>
        <PageTitle />
        <Email />
      </div>
    );
};

export default LoginPage;
