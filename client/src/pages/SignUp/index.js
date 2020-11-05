import React, { useState } from "react";
import "./style.css";


function SignUp(props) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function handleRegisterClick(event) {
    event.preventDefault();
    props.API.register(registerUsername, registerEmail, registerPassword).then(
      () => {
        props.API.login(registerEmail, registerPassword).then(res => {
          props.setUser({
            id: res.data._id,
            email: res.data.email,
            username: res.data.username,
            towatch: res.data.towatch,
            watched: res.data.watched
          });
          props.setIsLoggedIn(true);
        });
      }
    );
  }

  return (
    <div className="container">
      <div className="card">
        <form className="signup">
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email-input"
              placeholder="Email"
              onChange={e => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input
              type="text"
              className="form-control"
              id="username-input"
              placeholder="Username"
              onChange={e => setRegisterUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="text"
              className="form-control"
              id="password-input"
              placeholder="Password"
              onChange={e => setRegisterPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
