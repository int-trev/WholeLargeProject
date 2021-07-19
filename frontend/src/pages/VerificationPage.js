import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Scroll from '../components/Scroll';
import VerifyUI from '../components/VerificationUI';


const Verifyy = () =>
{
    return(
        <div>
            <Scroll />
            <PageTitle />
            <VerifyUI />
            <p>hello</p>
        </div>
    );
}

export default Verifyy;