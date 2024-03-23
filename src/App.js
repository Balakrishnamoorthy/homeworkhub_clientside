import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
// import ImageUpload from "./components/imageUpload.";
import Dashboard from "./dashboard/dashboard.js";
import Createroom from "./dashboard/room-button/createroom.js";
import Joinroom from "./dashboard/room-button/joinroom.js";
import Myroom from "./dashboard/room-button/myroom.js";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <Dashboard /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/createroom" element={<Createroom />} />
          <Route path="/dashboard/joinroom" element={<Joinroom />} />
          <Route path="/dashboard/myroom" element={<Myroom />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
