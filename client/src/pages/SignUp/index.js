import React from "react";

function SignUp(props) {
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
              onChange={e => props.setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input
              type="text"
              className="form-control"
              id="username-input"
              placeholder="Username"
              onChange={e => props.setRegisterUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="text"
              className="form-control"
              id="password-input"
              placeholder="Password"
              onChange={e => props.setRegisterPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
            onClick={props.handleRegisterClick}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
