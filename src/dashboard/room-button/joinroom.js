import React, { useState } from 'react';
import Header from '../header';

export default function Joinroom() {
  const [invitecode,setinvitecode] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
    
        console.log(invitecode);
        fetch("http://localhost:3004/createroom", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            invitecode,
          }),
        })
    }


    return (
        <div className='joinroom-body'> 
            <div>
                <Header />
            </div>
            <div className="cr">
            <input
              type="text"
              className="cr-input"
              placeholder="Enter Invite code"
              onChange={(e)=> setinvitecode(e.target.value)}
            />
            <br></br>
            <button onClick={handleSubmit}>Joinroom</button>
          </div>
        </div>

    );
};


