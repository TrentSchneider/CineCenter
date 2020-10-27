import React from "react";
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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/moviesearch">Movie Search</a>
          </li>
          <li>
            <a href="/login">Sign In</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropMenu;
