import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Scroll from '../components/Scroll'
import VerifyUI from '../components/VerificationUI'


const Verify = () =>
{
    return(
        <div>
            <Scroll />
            <PageTitle />
            <VerifyUI />
        </div>
    );
}

export default Verify;