import React from "react";
import "./style.css";

// returns the a card for each user with their information filled in
function DropMenu(props) {
  return (
    <div id="accordion">
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
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropMenu;
