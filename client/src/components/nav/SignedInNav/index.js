import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// returns the a card for each user with their information filled in
function DropMenu(props) {
  return (
    <nav role="navigation">
      {/* <a href="javascript:void(0);" class="ic menu" tabindex="1">
        
      </a>
      <a href="javascript:void(0);" class="ic close"></a> */}
      <ul class="main-nav">
        <li class="top-level-link">
          <a class="mega-menu">
            <span>Menu</span>
          </a>
          <div class="sub-menu-block">
            <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-4">
                <ul class="sub-menu-lists">
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
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default DropMenu;
