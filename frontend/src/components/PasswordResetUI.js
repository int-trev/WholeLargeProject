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
    var securityCode;

    const [message,setMessage] = useState('');


    const doReset = async event => 
    {
        event.preventDefault();
        var securitycode =  "sc(" + securityCode.value + ")";
        var hashedPass = hashing(loginPassword.value)
        var obj = {username:loginName.value,password:hashedPass,email:email.value, securityCode: securitycode};
        var js = JSON.stringify(obj);

        
        if(loginPassword.value !== confimedPassword.value)
        {
            setMessage("Passwords do not match");
        }
        else
        {
            var config = 
            {
            method: 'post',
            url: bp.buildPath('api/updatePassword'),	
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
    }

        return(
        <div className="loginDiv">
            <span id="inner-title">ENTER YOUR INFORMATION TO CONFIRM YOUR IDENTITY</span><br />
            <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
            <input type="text" id="email" placeholder="Email" ref={(c) => email = c}  /><br />
            <input type="text" id="code" placeholder="Security Code" ref={(c) => securityCode = c}  /><br />
            <input type="password" id="loginPassword" placeholder="New Password" ref={(c) => loginPassword = c} /><br />
            <input type="password" id="loginPassword" placeholder="Confirm Password" ref={(c) => confimedPassword = c} /><br />
            <button onClick={doReset}>Reset Password</button>
            <span id="loginResult">{message}</span>
        </div>
        );
        
      
};

export default PasswordReset;