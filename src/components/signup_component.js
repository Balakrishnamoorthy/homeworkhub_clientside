import React, { Component, useState } from "react";

export default function SignUp() {
  const [name, setname] = useState("");
  const [rollnum, setrollnum] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [usertype, setusertype] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (usertype == "faculty" && secretKey != "MCA") {
      e.preventDefault();
      alert("Invalid faculty");
    } else {
      e.preventDefault();

      console.log(name, rollnum, phone, password);
      fetch("http://localhost:3004/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          rollnum,
          name,
          phone,
          password,
          usertype,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.success == "true") {
            alert(data.message);
            window.location.href = "./sign-in";
          } else {
            alert(data.message);
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register As
            <input
              type="radio"
              name="Usertype"
              value="faculty"
              onChange={(e) => setusertype(e.target.value)}
            />
            Faculty
            <input
              type="radio"
              name="Usertype"
              value="student"
              onChange={(e) => setusertype(e.target.value)}
            />
            Student
          </div>
          {usertype == "faculty" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>Roll Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Roll number"
              onChange={(e) => setrollnum(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Phone number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone number"
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
