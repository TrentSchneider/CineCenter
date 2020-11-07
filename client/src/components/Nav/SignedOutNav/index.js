import React from "react";
import { Link } from "react-router-dom";

function DropMenu(props) {
  return (
    <nav role="navigation">
      <a
        href="javascript:void(0);"
        className="ic menu btn-dark curve"
        tabIndex="1"
      >
        <span>&#9776;</span>
      </a>
      <a href="javascript:void(0);" className="ic close"></a>
      <ul className="main-nav">
        <li className="top-level-link">
          <a className="mega-menu">
            <span>Menu</span>
          </a>
          <div className="sub-menu-block col-sm-4 col-12">
            <div className="row">
              <div className="col-11">
                <ul className="sub-menu-lists">
                  <li className="card mb-1 pt-1 pb-1 pl-2">
                    <Link
                      className="bf"
                      to={{
                        pathname: "/home",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="card mb-1 pt-1 pb-1 pl-2">
                    <Link
                      className="bf"
                      to={{
                        pathname: "/moviesearch",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Movie Search
                    </Link>
                  </li>
                  <li className="card mb-1 pt-1 pb-1 pl-2">
                    <Link
                      className="bf"
                      to={{
                        pathname: "/map",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Find Nearby Theaters
                    </Link>
                  </li>
                  <li className="card mb-1 pt-1 pb-1 pl-2">
                    <Link
                      className="bf"
                      to={{
                        pathname: "/login",
                        state: { isLoggedIn: true, user: true }
                      }}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="card pt-1 pb-1 pl-2">
                    <Link
                      className="bf"
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
      <img
        className="logo"
        src="../../../../assets/images/CineCenterLogo.png"
      />
    </nav>
  );
}

export default DropMenu;
