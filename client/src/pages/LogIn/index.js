import React from "react";

function LogIn(props) {

  return (
    <div class="container">
      <div className="card">
        <form className="login">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
              onChange={e => props.setLoginEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
              onChange={e => props.setLoginPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-default"
            onClick={props.handleLoginClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
