import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Scroll from '../components/Scroll'
import RegisterUI from '../components/RegisterUI'


const Register = () =>
{
    return(
        <div>
            <Scroll />
            <PageTitle />
            <RegisterUI />
        </div>
    );
}

export default Register;