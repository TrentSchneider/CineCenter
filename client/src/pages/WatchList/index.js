import React from "react";
import ToWatch from "../../components/ToWatch";
import Watched from "../../components/Watched";

function WatchList(props) {
  return (
    <div className="card d-flex justify-content-around row">
      <ToWatch user={props.user} handleMoveToWatched={props.handleMoveToWatched} />
      <Watched user={props.user} />
    </div>
  );
}

export default WatchList;
