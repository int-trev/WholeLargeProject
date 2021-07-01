import React from 'react';

import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import LandingPageUI from '../components/LandingPageUI';

const CardPage = () =>
{
    return(
        <div>
            <PageTitle />
            <LoggedInName />
            <LandingPageUI />
        </div>
    );
}

export default CardPage;