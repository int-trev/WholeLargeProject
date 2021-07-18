import React, { useState } from 'react';
import axios from 'axios';


function PasswordReset()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    var hashing = require('../md5.js');

    var loginName;
    var loginPassword;
    var email;
    var confimedPassword;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {
        event.preventDefault();

        var hashedPass = hashing(loginPassword.value)
        var obj = {username:loginName.value,password:hashedPass,firstName:firstName.value,lastName:lastName.value,email:email.value, securityCode: securityCode};
        var js = JSON.stringify(obj);
        
        if(loginPassword != confimedPassword)
        {
            setMessage("Passwords do not match");
        }
        else
        {
            var config = 
            {
            method: 'post',
            url: bp.buildPath('api/addUser'),	
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
                if (res.error == "Duplicate username and/or password detected") 
                {
                    setMessage(res.error);
                }
                else 
                {	
                setMessage("User is now verified")
                }
            })
            .catch(function (error) 
            {
                console.log(error);
            });
        } 

            return(
            <div id="loginDiv">
                <span id="inner-title">ENTER YOUR INFORMATION TO CONFIRM YOUR IDENTITY</span><br />
                <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
                <input type="text" id="email" placeholder="Email" ref={(c) => email = c}  /><br />
                <input type="text" id="code" placeholder="Security Code" ref={(c) => securityCode = c}  /><br />
                <input type="password" id="loginPassword" placeholder="New Password" ref={(c) => loginPassword = c} /><br />
                <input type="password" id="loginPassword" placeholder="Confirm Password" ref={(c) => confimedPassword = c} /><br />
                <button className = "blue" onClick={doRegister}>Reset Password</button>
                <span id="loginResult">{message}</span>
            </div>
            );
        
    }   
};

export default PasswordReset;