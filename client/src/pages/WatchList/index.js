import React, { useEffect, useState } from "react";
import ToWatch from "../../components/ToWatch";
import Watched from "../../components/Watched";

function WatchList(props) {
  const [btnClick, setBtnClick] = useState(false);
  useEffect(() => {
    props.userLists();
  }, [btnClick]);
  console.log("watchlist user", props.user);
  return (
    <div className="card d-flex justify-content-around row">
      <ToWatch
        setBtnClick={setBtnClick}
        lists={props.lists}
        user={props.user}
        handleDeleteToWatch={props.handleDeleteToWatch}
        handleMoveToWatched={props.handleMoveToWatched}
        userInfo={props.userInfo}
      />
      <Watched
        setBtnClick={setBtnClick}
        lists={props.lists}
        user={props.user}
        handleDeleteWatched={props.handleDeleteWatched}
        userInfo={props.userInfo}
      />
    </div>
  );
}

export default WatchList;
