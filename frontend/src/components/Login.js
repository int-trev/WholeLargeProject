import React, { useState } from 'react';
import axios from 'axios';


function Login()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    var loginName;
    var loginPassword;
    var email;
    var hashing = require('../md5.js');

    const [message,setMessage] = useState('');


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

    const doLogin = async event => 
    {
        event.preventDefault();

        var hashedPass = hashing(loginPassword.value);
        var obj = {login:loginName.value,password:hashedPass};
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/login'),	
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
                setMessage('User/Password combination incorrect');
            }
            else 
            {	
                storage.storeToken({accessToken:res.accessToken});
                var jwt = require('jsonwebtoken');
    
                var ud = jwt.decode(storage.retrieveToken(),{complete:true});
                var userId = ud.payload.userId;
                var firstName = ud.payload.firstName;
                var lastName = ud.payload.lastName;

                console.log(userId);
                
                
                var user = {firstName:firstName,lastName:lastName,id:userId}
                localStorage.setItem('user_data', JSON.stringify(user));
                console.log(localStorage.getItem('user_data'));
                window.location.href = '/landing';
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });
    }

    return(
      <div id="loginDiv">
        <span id="inner-title">PLEASE LOG IN</span><br />
        <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
        <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
        <button  onClick={doLogin}>Login</button>
        <span id="loginResult">{message}</span>
        <p>Forgot your password? Provide your email and click this button to get a code and a link to use to reset your password.</p>
        <input type="text" id="email" placeholder="Email" ref={(c) => email = c} /><br />
        <button  onClick={sendPasswordEmail}>Send Email</button> 
     </div>
    );
};

export default Login;
