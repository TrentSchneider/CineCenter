import React from "react";
import ToWatch from "../../components/ToWatch";
import Watched from "../../components/Watched";

function WatchList(props) {
  return (
    <div className="card d-flex justify-content-around row">
      <ToWatch toWatchList={props.toWatchList} />
      <Watched watchedList={props.watchedList} />
    </div>
  );
}

export default WatchList;
