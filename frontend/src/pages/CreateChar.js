import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import Scroll from '../components/Scroll'

const CreateChar = () =>
{
    return(
        <div class = "brown">
            <Scroll />
            <PageTitle />
            <LoggedInName />
            <p>hello good sir</p>
        </div>
    );
}

export default CreateChar;