import React, { Component, useEffect, useState } from 'react';

function Dashbody() {
    const [userType, setUserType] = useState("Admin");

    useEffect(() => {
        fetch('/getUserInfo')
            .then(response => response.json())
            .then(data => {
                // Assuming the response contains the user type
                setUserType(data.userType);
            })
            .catch(error => {
                console.error('Error fetching user information:', error);
            });
    }, []);
    return (
        <div>
            <div className="discription">
                <p className='dis-heading'> Welcome to our Homework Hub for Students!</p>
                <p>
                    Are you tired of juggling multiple platforms and resources to manage your assignments?
                    Look no further! Our Homework Hub provides a centralized space where students can efficiently organize,
                    track, and complete their homework assignments with ease.
                </p>
            </div>
            <div className="room-button">
                {userType === 'Admin' ?
                    (
                        <div>
                            <button type="submit" classname="create-room">
                                Create Room
                            </button>
                            <button type='submit' classname="join-room">
                                Join Room
                            </button>
                            <button type='submit' classname="my-room">
                                My Room
                            </button>
                        </div>
                    ) :
                    (
                        <div>
                            {/*  <button type="submit" classname="create-room">
                               Create Room
                             </button> */}
                            <button type='submit' classname="join-room">
                                Join Room
                            </button>
                            <button type='submit' classname="my-room">
                                My Room
                            </button>
                        </div>


                    )
                }
            </div>
        </div>
    );

}


export default Dashbody;