import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import Scroll from '../components/Scroll'
import Create from '../components/CreateCharacterUI'

const CreateChar = () =>
{
    return(
        <div>
            <Scroll />
            <PageTitle />
            <LoggedInName />
            <Create />
        </div>
    );
}

export default CreateChar;