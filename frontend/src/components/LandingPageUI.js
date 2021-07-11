import React, { useState } from 'react';
import axios from 'axios';

const newUser = {
    ray:[
        {
            Login:"hi",Password:"pass",verification:"hello" 
        },
        {
            Login:"hey",Password:"pass",verification:"hello" 
        }
    ]
};


const resultList = newUser.ray.map((obj) =>
<div>
    <p>{obj.Login}</p>
    <input type="submit" id="loginButton" class="buttons" value = "Do It"/>
    <ViewComp name = {obj.Password}/>
</div>
);


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

    const searchCard = async event => 
    {
        event.preventDefault();
        		
        var tok = storage.retrieveToken();
        var obj = {userId:userId,search:search.value,jwtToken:tok};
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/searchDnD'),	
            headers: 
            {
                'Content-Type': 'application/json'
            },
            data: js
        };
    
        axios(config)
            .then(function (response) 
        {
            var res = response.data;
            var retTok = res.jwtToken;
    
            if( res.error.length > 0 )
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                var _results = res.results;
                var resultText = '';
                resultList = _results.map((obj) =>
                <li>{obj.characterName}</li>
                );
                
                setResults('Card(s) have been retrieved');

                setCardList(resultText);
                storage.storeToken( {accessToken:retTok} );
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

    };

    // document.getElementById("idName").style.display("none");
    // edit the ids, maybe add a hash 
    // 

    return(
        <div id="landingPageDiv">
            <br />
            <input type="text" id="searchText" placeholder="Card To Search For" 
                ref={(c) => search = c} />
            <span id="cardSearchResult">{searchResults}</span>
            <input type="submit" id="loginButton" class="buttons" value = "Do It"
             onClick={getAbout} />
             <div id="component">
                    <span>{resultList}</span>
             </div>
        </div>
    );
}

function ViewComp(props) {
   
    return <h1>{props.name}</h1>;
  }



export default LandingPageUI;
