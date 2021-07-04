import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import LandingPageUI from '../components/LandingPageUI';
import Scroll from '../components/Scroll'

const Landing = () =>
{
    return(
        <div class = "brown">
            <Scroll />
            <PageTitle />
            <LoggedInName />
            <LandingPageUI />
        </div>
    );
}

export default Landing;