import React from "react";
import ToWatch from "../../components/ToWatch";
import Watched from "../../components/Watched";

function WatchList(props) {
  return (
    <div className="card d-flex justify-content-around row">
      <ToWatch
        user={props.user}
        handleDeleteToWatch={props.handleDeleteToWatch}
        handleMoveToWatched={props.handleMoveToWatched}
        userInfo={props.userInfo}
      />
      <Watched
        user={props.user}
        handleDeleteWatched={props.handleDeleteWatched}
        userInfo={props.userInfo}
      />
    </div>
  );
}

export default WatchList;
