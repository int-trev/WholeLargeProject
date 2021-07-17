import React, { useState } from 'react';
import axios from 'axios';


function Register()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    var nodemailer = require('nodemailer');

    var loginName;
    var loginPassword;
    var firstName;
    var lastName;
    var email;
    var securityCode = Math.floor((Math.random() * 1000000) + 100000)

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {
        event.preventDefault();

        var obj = {username:loginName.value,password:loginPassword.value,firstName:firstName.value,lastName:lastName.value,email:email.value, securityCode: securityCode};
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
                var transporter =
                nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'dndpagemaker@gmail.com',
                        pass: 'DATZProject4@'
                    }
                });

                var mailOptions = {
                    from: 'dndpagemaker@gmail.com',
                    to: email,
                    subject: 'Password Verification for DnDPageMaker',
                    text: 'Enter this code in the security code section: ' + securityCode
                };

                transporter.sendMail(mailOptions,
                    function(error,info){
                        if(error)
                        {
                            console.log(error);
                            setMessage(error);
                        }
                        else
                        {
                            console.log('Email sent: ' + info.response);
                            setMessage("User added to database! Check email for verification.");
                        }
                    });
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