import React, { useState } from "react";
import "./style.css";

function LogIn(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function handleLoginClick(event) {
    event.preventDefault();
    if (loginEmail !== "" || loginPassword !== "") {
      props.API.login(loginEmail, loginPassword).then(res => {
        props.setUser({
          id: res.data._id,
          username: res.data.username
        });
        props.setLists({
          towatch: res.data.towatch,
          watched: res.data.watched
        });
        props.setIsLoggedIn(true);
      });
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-sm-12 col-md-10 p-1">
        <form className="login">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="bf mt-3 mb-0">
              <h5>Email address:</h5>
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
              onChange={e => setLoginEmail(e.target.value)}
            />

            <label htmlFor="passwordImput" className="bf mb-0 mt-1">
              <h5>Password:</h5>
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
              onChange={e => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-dark" onClick={handleLoginClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
