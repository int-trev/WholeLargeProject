import React, { useState } from 'react';
import axios from 'axios';


function Verification()
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

    const doVerification = async event => 
    {
        event.preventDefault();

        var hashedPass = hashing(loginPassword.value)
        var obj = {username:loginName.value,password:hashedPass,email:email.value, securityCode: securityCode.value};
        var js = JSON.stringify(obj);
        
        
        var config = 
        {
        method: 'post',
        url: bp.buildPath('api/verifyUser'),	
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
            if (res.error != "") 
            {
                setMessage(res.error);
            }
            else 
            {	
                setMessage("User is now verified");
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });
        
    }
        return(
        <div className="loginDiv">
            <span id="inner-title">VERIFY YOUR ACCOUNT</span><br />
            <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
            <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
            <input type="text" id="email" placeholder="Email" ref={(c) => email = c}  /><br />
            <input type="text" id="code" placeholder="Security Code" ref={(c) => securityCode = c}  /><br />
            <button  onClick={doVerification}>Verify</button>
            <span id="loginResult">{message}</span>
        </div>
        );
        
       
};

export default Verification;