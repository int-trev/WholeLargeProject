import React, { useState } from 'react';
import axios from 'axios';


function Register()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');

    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {
        event.preventDefault();

        var obj = {username:loginName.value,password:loginPassword.value};
        var js = JSON.stringify(obj);

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
                setMessage("User added to database! Check email for verification.");
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });
    }

    return(
      <div id="loginDiv">
        <span id="inner-title">PLEASE REGISTER</span><br />
        <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c}  /><br />
        <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
        <input type="submit" id="loginButton" className="buttons" value = "Do It"
          onClick={doRegister} />
        <span id="loginResult">{message}</span>
     </div>
    );
};

export default Register;