import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';



function Header() {

  const [username, setusername] = useState("");
  const [usertype, setusertype] = useState("");


  useEffect(() => {
    const storedName = window.localStorage.getItem('username');
    if (storedName) {
      setusername(storedName);
    }
  }, []);
  useEffect(() => {
    const storedType = window.localStorage.getItem('usertype');
    if (storedType) {
      setusertype(storedType);
    }
  }, []);

  function logout(){
    window.localStorage.clear();
    window.location.href = "./sign-in";
  }



  const [photoUrl, setPhotoUrl] = useState('D:/_Bala_project/login-registration-main/src/assets/profile_bg.jpg');

  useEffect(() => {
    // Fetch photo from the database
    const fetchPhoto = async () => {

      try {
        // const response = "D:/_Bala_project/login-registration-main/src/assets/profile_bg.jpg";
        // setPhotoUrl(response);

        const response = await axios.get('your_database_api_endpoint');
        // Assuming your API returns a JSON object with a 'photoUrl' property
        setPhotoUrl(response.data.photoUrl);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhoto(); // Call the fetch function when the component mounts
  }, []);



  return (
    <div >
      <header className='header'>
        <div>
          {usertype === 'faculty' ?
            (
              <nav classname="storke">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Create Room</a></li>
                  <li><a href="#">Join Room</a></li>
                  <li><a href="#">My room</a></li>
                </ul>
              </nav>
            )
            :
            (
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  {/* <li><a href="#">Create Room</a></li> */}
                  <li><a href="#">Join Room</a></li>
                  <li><a href="#">My room</a></li>
                </ul>
              </nav>
            )}
        </div>
        <div className="round-photo-frame">
          {/* Display the fetched photo */}

        </div>
        <div class="user-details">

           <div>
            <p class="username">{username}</p>
          
            <p class="usertype">{usertype}</p>
          </div>
          <img src={photoUrl} alt="User" />
         
          <button className='logout' >Logout</button>
        </div>
      </header>

      {/* <body className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
                
                {/* <img  src="D:\_Bala_project\login-registration-main\src\BG-image.jpg" alt="Description of the image" width="100" height="100"></img> 
                
                </body> */}
    </div>
  );
}



export default Header;
