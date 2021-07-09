import React, { useState } from 'react';
import axios from 'axios';


function getAbout()
{
  window.location.href = '/createcharacterpage';
}


function LandingPageUI()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");
    
    var card = '';
    var search = '';

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;



    return(
        <div id="landingPageDiv">
            <br />
            <input type="text" id="searchText" placeholder="Card To Search For" 
                ref={(c) => search = c} />
            <span id="cardSearchResult">{searchResults}</span>
            <input type="submit" id="loginButton" class="buttons" value = "Do It"
             onClick={getAbout} />
        </div>
    );
}

export default LandingPageUI;
