import React from "react";
import { Link } from "react-router-dom";

function DropMenu(props) {
  return (
    <nav role="navigation">
      <a href="javascript:void(0);" class="ic menu" tabindex="1">
        
      </a>
      <a href="javascript:void(0);" class="ic close"></a>
      <ul class="main-nav">
        <li class="top-level-link">
          <a class="mega-menu">
            <span>Menu</span>
          </a>
          <div class="sub-menu-block col-sm-4 col-12">
            <div class="row">
              <div class="col-11">
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
                        pathname: "/map",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Find Nearby Theaters
                    </Link>
                  </li>
                  <li className="card">
                    <Link
                      to={{
                        pathname: "/login",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="card">
                    <Link
                      to={{
                        pathname: "/signup",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Sign Up
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
