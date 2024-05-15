import React, { useState, useEffect } from 'react';
import Header from '../header';
import LoadingSpinner from "D:/_Bala_project/homework-hub-react/src/components/LoadingSpinner";

export default function Createroom() {
  const [roomname, setroomname] = useState('')
  const [rollnum, setrollnnum] = useState('')
  const [token, settoken] = useState('')
  const [invitecode, setinvitecode] = useState('Your invite code displays here')
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    if (storedToken) {
      settoken(storedToken);
    }
  }, []);

  useEffect(() => {
    const storedRollnum = window.localStorage.getItem('rollnum');
    if (storedRollnum) {
      setrollnnum(storedRollnum);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(token,roomname, rollnum);
    setIsLoading(true);
    try {
      fetch("http://localhost:3004/createroom", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          roomname,
          token,
          rollnum
        }),
      })

        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.success==true){
          setinvitecode(data.result.invitecode)
          setIsLoading(false)
          }
          else{
          alert(data.message);
          setIsLoading(false)
          }
        });

    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='crateroom-body'>
      <div>
        <Header />
      </div>
      <div className="cr">
        {isLoading ? (<LoadingSpinner />) :
          (
            <div>
              <div>
                <input
                  type="text"
                  className="cr-input"
                  placeholder="Enter Room name"
                  onChange={(e) => setroomname(e.target.value)}
                />
                <br></br>
                <button onClick={handleSubmit}>Createroom</button>
              </div>

              <div className='content mx-auto'>
                <h1 className='content-head'>Welcome to our platform! </h1>
                <p>This code serves as the key for students to enter their respective classrooms.
                  This invite code is essential for accessing your classroom. Keep it safe,
                  as it will be your ticket to join your class discussions and activities. This is your room's invite code.
                </p>
                <div className='invitecode'>{invitecode}</div>
                <p><a href='/dashboard/myroom'>Click here</a> to go to myroom</p>
              </div>
            </div>
          )
        }
      </div>
    </div>

  );
};


