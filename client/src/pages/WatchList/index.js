import React from "react";
import ToWatch from "../../components/ToWatch";
import Watched from "../../components/Watched";

function WatchList(props) {
  return (
    <div className="card">
      <ToWatch data={props.data} />
      <Watched data={props.data} />
    </div>
  );
}

export default WatchList;
