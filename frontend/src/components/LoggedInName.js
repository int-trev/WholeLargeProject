import React from 'react';

function LoggedInName()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    if(ud != null)
    {
        var userId = ud.id;
        console.log(userId);
        var firstName = ud.firstName;
        var lastName = ud.lastName;
    }

    const doLogout = event => 
    {
	    event.preventDefault();

        localStorage.removeItem("user_data")
        window.location.href = '/';

    };    


    if(ud != null)
    {
      return(
        <div id="loggedInDiv">
        <span id="userName">Logged In As {firstName} {lastName}</span><br />
        <button type="button" id="logoutButton" class="buttons" 
          onClick={doLogout}> Log Out </button>
        </div>
       );
    }
    else
    {
      return(
        <div id="loggedInDiv">
        <span>NOT LOGGED IN, go back and log in</span>
        </div>
      );
    }
};

export default LoggedInName;
