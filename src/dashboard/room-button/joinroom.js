import React, { useState, useEffect } from 'react';
import Header from '../header';

export default function Joinroom() {
  const [invitecode, setinvitecode] = useState('')
  const [token, settoken] = useState('')

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    if (storedToken) {
      settoken(storedToken);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(invitecode);
    fetch("http://localhost:3004/joinroom", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        invitecode,
        token
      }),
    })

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
        if(data.success==true)
        {
          window.location.href = "./myroom";
        }
        else{
          alert(data.message);
        }
      });
  }


  return (
    <div className='joinroom-body'>
      <div>
        <Header />
      </div>


      <div className='content mx-auto'>
        <h1 className='content-head'>Welcome to our classroom portal!</h1>
        <p>To join your classroom, simply enter the invite code provided by your teacher below and
          click 'Join'. This unique code ensures secure access to your class materials and activities.
          If you haven't received an invite code yet, please reach out to your instructor.
          Let's embark on this educational journey together!
        </p>

      </div>


      <div className="cr">
        <input
          type="text"
          className="cr-input"
          placeholder="Enter Invite code"
          onChange={(e) => setinvitecode(e.target.value)}
        />
        <br></br>
        <button onClick={handleSubmit}>Joinroom</button>
      </div>
    </div>

  );
};


