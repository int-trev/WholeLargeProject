import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Scroll from '../components/Scroll'
import PasswordResetUI from '../components/PasswordResetUI'


const Reset = () =>
{
    return(
        <div>
            <PageTitle />
            <PasswordResetUI />
        </div>
    );
}

export default Reset;