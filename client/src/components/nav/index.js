import React from "react";
import "./style.css";

// returns the a card for each user with their information filled in
function Card(props) {
  return (
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
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
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            <ul>
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

export default Card;
