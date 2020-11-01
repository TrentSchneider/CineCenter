import React, { useState } from "react";

function LogIn(props) {
  const [loginEmail, setLoginEmail] = useState("test4@test.com");
  const [loginPassword, setLoginPassword] = useState("password");

  function handleLoginClick(event) {
    event.preventDefault();
    props.API.login(loginEmail, loginPassword).then(res => {
      console.log(res.data);
      props.setUser({
        id: res.data._id,
        email: res.data.email,
        username: res.data.username,
        towatch: res.data.towatch,
        watched: res.data.watched
      });
      console.log("user after login", props.user);
      props.setIsLoggedIn(true);
      
    });
  }

  return (
    <div className="container">
      <div className="card">
        <form className="login">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
              onChange={e => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
              onChange={e => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-default" onClick={handleLoginClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
