import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import createroom from './room-button/createroom';

function Dashbody() {
    const [usertype, setusertype] = useState('');
    

    useEffect(() => {
        const storedType = window.localStorage.getItem('usertype');
        if (storedType) {
          setusertype(storedType);
        }
      }, []);

    return (
        <div className='dashbody'>
            <div className="discription">
                <p className='dis-heading'> Welcome to our Homework Hub for Students!</p>
                <p>
                    Are you tired of juggling multiple platforms and resources to manage your assignments?
                    Look no further! Our Homework Hub provides a centralized space where students can efficiently organize,
                    track, and complete their homework assignments with ease.
                </p>
            </div>
            <div className="room-button">
                {usertype === 'faculty' ?
                    (
                        <div>
                            <button type="submit" className="room">
                            <Link className="roomlink" to="createroom">Create Room</Link>
                            </button>
                            <button type='submit' className="room">
                            <Link className="roomlink" to="joinroom">Join Room</Link>
                            </button>
                            <button type='submit' className="room">
                            <Link className="roomlink" to="myroom">My Room</Link>
                            </button>
                        </div>
                    ) :
                    (
                        <div>
                            {/*  <button type="submit" classname="createroom">
                               Create Room
                             </button> */}
                            <button type='submit' className="room">
                            <Link className="joinlink" to="joinroom">Join Room</Link>
                            </button>
                            <button type='submit' className="room">
                            <Link className="mylink" to="myroom">My Room</Link>
                            </button>
                        </div>


                    )
                }
            </div>
        </div>
    );

}


export default Dashbody;