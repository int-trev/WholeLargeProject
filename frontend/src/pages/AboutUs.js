import React from 'react';
import './LandingPageCSS.css';

import PageTitle from '../components/PageTitle';
import Scroll from '../components/Scroll'

const About = () =>
{
    return(
        <div>
            <Scroll />
            <PageTitle />
            <div class = "about">
                <h1>About Us</h1>
                    <p>We are a group of college students working on an in class project.</p>
                    <p>Currently, we desire for this application to become one that can be used in our free time.</p>
                    <p>After the project is over, we will be continuing development.</p>
            </div>
        </div>
    );
}

export default About;