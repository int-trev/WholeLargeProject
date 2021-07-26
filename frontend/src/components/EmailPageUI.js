import React, { useState } from 'react';
import axios from 'axios';


function Email()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    var email;
    var hashing = require('../md5.js');

    const [message,setMessage] = useState('');

    function returnLogin()
    {
    window.location.href = '/'
    }


    //make event to create security code
    const sendPasswordEmail = async event =>
    {
        event.preventDefault();
        console.log(email.value);
        var sc = Math.floor((Math.random() * 8999) + 1000);
        var obj = {email: email.value, securityCode: sc};
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/passwordResetEmail'),	
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
            if (res.error) 
            {
                setMessage('Email is not mapped to an account');
            }
            else 
            {	
                setMessage('Email sent');
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });
    }

    return(
      <div className = "loginDiv">
        <button onClick={returnLogin}>Return to Login</button><br />
        <p>No need to worry! Provide an email and we will send a code and link!</p>
        <input type="text" id="email" placeholder="Email" ref={(c) => email = c} /><br />
        <button  onClick={sendPasswordEmail}>Send Email</button> <br />
        <span>{message}</span>
     </div>
    );
};

export default Email;