import React, { useState } from "react";
import "./style.css";

function SignUp(props) {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function handleRegisterClick(event) {
    event.preventDefault();
    if (
      registerUsername !== "" ||
      registerEmail !== "" ||
      registerPassword !== ""
    ) {
      props.API.register(
        registerUsername,
        registerEmail,
        registerPassword
      ).then(() => {
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
      });
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-sm-12 col-md-10 p-1">
        <form className="signup">
          <div className="form-group">
            <label htmlFor="inputEmail" className="bf mb-0 mt-3">
              <h5>Email address:</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="email-input"
              placeholder="Email"
              onChange={e => setRegisterEmail(e.target.value)}
            />

            <label htmlFor="inputUsername" className="bf mb-0 mt-1">
              <h5>Username:</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="username-input"
              placeholder="Username"
              onChange={e => setRegisterUsername(e.target.value)}
            />

            <label htmlFor="inputPassword" className="bf mb-0 mt-1">
              <h5>Password:</h5>
            </label>
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
            className="btn btn-dark"
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
