import React, { useState,useEffect } from 'react';
import Header from '../header';

export default function Createroom() {
  const [roomname,setroomname] = useState('')
  const [rollnum, setrollnnum] = useState('')
  const [token, settoken] = useState('')

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
    
        console.log(roomname,rollnum);
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
     
      });
    }


    return (
        <div className='crateroom-body'>
            <div>
                <Header />
            </div>
            <div className="cr">
            <input
              type="text"
              className="cr-input"
              placeholder="Enter Room name"
              onChange={(e)=> setroomname(e.target.value)}
            />
            <br></br>
            <button onClick={handleSubmit}>Createroom</button>
          </div>
        </div>

    );
};


