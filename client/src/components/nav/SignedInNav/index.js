import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// returns the a card for each user with their information filled in
function DropMenu(props) {
  return (
    <div id="accordion" className="col-1">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Menu
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">
            <ul className="dmen">
              <li>
                <Link
                  to={{
                    pathname: "/home",
                    state: { isLoggedIn: true, user: true }
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/moviesearch",
                    state: { isLoggedIn: true, user: true }
                  }}
                >
                  Movie Search
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/watchlist",
                    state: { isLoggedIn: true, user: true }
                  }}
                >
                  Movie Lists
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/api/logout",
                    state: { isLoggedIn: true, user: true }
                  }}
                  onClick={() => props.handleLogoutClick()}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
