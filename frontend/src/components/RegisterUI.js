import React, { useState } from 'react';
import axios from 'axios';


function Register()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    var hashing = require('../md5.js');

    var loginName;
    var loginPassword;
    var firstName;
    var lastName;
    var email;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {

        var hashedPass = hashing(loginPassword.value);
        var sc = Math.floor((Math.random() * 8999) + 1000);
        var obj = {username:loginName.value,password:hashedPass,firstName:firstName.value,lastName:lastName.value,email:email.value, SecurityCode: sc};
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
            if (res.error) 
            {
                setMessage(res.error);
            }
            else 
            {	
                setMessage("Cool");
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
        <input type="text" id="fName" placeholder="First Name" ref={(c) => firstName = c}  /><br />
        <input type="text" id="lName" placeholder="Last Name" ref={(c) => lastName = c}  /><br />
        <input type="text" id="email" placeholder="Email" ref={(c) => email = c}  /><br />
        <input type="submit" id="loginButton" className="buttons" value = "Do It"
          onClick={doRegister} />
        <span id="loginResult">{message}</span>
     </div>
    );
};

export default Register;