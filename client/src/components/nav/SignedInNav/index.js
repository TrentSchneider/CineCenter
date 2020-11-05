import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// returns the a card for each user with their information filled in
function DropMenu(props) {
  return (
    <div className="menu">
      <input type="checkbox" id="menuToggle" />
      <label for="menuToggle">
        <span>
          <h5>Menu</h5>
        </span>
        <span>
          <h5>Menu</h5>
        </span>
      </label>

      <ul>
        <li className="card">
          <Link
            to={{
              pathname: "/home",
              state: { isLoggedIn: true, user: true }
            }}
          >
            Home
          </Link>
        </li>
        <li className="card">
          <Link
            to={{
              pathname: "/moviesearch",
              state: { isLoggedIn: true, user: true }
            }}
          >
            Movie Search
          </Link>
        </li>
        <li className="card">
          <Link
            to={{
              pathname: "/watchlist",
              state: { isLoggedIn: true, user: true }
            }}
          >
            Movie Lists
          </Link>
        </li>
        <li className="card">
          <Link onClick={() => props.handleLogoutClick()} to="/">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropMenu;
