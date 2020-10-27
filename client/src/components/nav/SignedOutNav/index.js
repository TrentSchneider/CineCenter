import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function DropMenu(props) {
  return (
    <div className="card dmen col-1 p-0">
      <button type="button" className="card-header collapsible">
        Menu
      </button>
      <div className="card-body content">
        <ul className="p-0">
          <li>
            <Link to={{ pathname: "/home", state: { isLoggedIn: true } }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/moviesearch", state: { isLoggedIn: true } }}
            >
              Movie Search
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/login", state: { isLoggedIn: true } }}>
              Sign In
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/signup", state: { isLoggedIn: true } }}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropMenu;
