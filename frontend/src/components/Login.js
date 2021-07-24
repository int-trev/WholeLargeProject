import React, { useState } from 'react';
import axios from 'axios';


function Login()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    var loginName;
    var loginPassword;
    var hashing = require('../md5.js');

    const [message,setMessage] = useState('');

    function getNewUser()
    {
    window.location.href = '/register'
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
                setMessage(res.error);
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
      <div className = "loginDiv">
        <span id="inner-title">PLEASE LOG IN</span><br />
        <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
        <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
        <button  onClick={doLogin}>Login</button> <br />
        <span id="loginResult">{message}</span> <br />
        <a href="/emailpage">Forgot your password?</a>
        <p>Don't have an account? Create one here!</p>
        <button  onClick={getNewUser}>Sign Up Here!</button>
     </div>
    );
};

export default Login;
