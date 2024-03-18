import React, {Component,useEffect, useState } from 'react';
import axios from 'axios'; 



function Header() {

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

  const [username, setUsername] = useState("UserName");

  useEffect(() => {
    fetch('/getUserInfo')
      .then(response => response.json())
      .then(data => {
        // Assuming the response contains the user type
        setUsername(data.username);
      })
      .catch(error => {
        console.error('Error fetching user information:', error);
      });
  }, []);


  return (
    <div >
      <header className='header'>
        <div>
          {userType === 'Admin' ?
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
          <img src={photoUrl} alt="User" />
        </div>
        <div class="userdetails">
          <p class="username">{username}</p>
          <p class="usertype">{userType}</p> 
              
        </div>
      </header>

      {/* <body className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
                
                {/* <img  src="D:\_Bala_project\login-registration-main\src\BG-image.jpg" alt="Description of the image" width="100" height="100"></img> 
                
                </body> */}
    </div>
  );
}



export default Header;
