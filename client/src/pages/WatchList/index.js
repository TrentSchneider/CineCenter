import React, { useEffect, useState } from "react";
import ToWatch from "../../components/ToWatch";
import Watched from "../../components/Watched";
// import "./style.css";

function WatchList(props) {
  useEffect(() => {
    props.userLists();
  }, []);

  console.log("watchlist user", props.user);
  return (
    <div className="d-flex justify-content-center">
      <div className="card d-flex justify-content-around row col-8">
        <ToWatch
          btnClick={props.btnClick}
          setBtnClick={props.setBtnClick}
          lists={props.lists}
          user={props.user}
          handleDeleteToWatch={props.handleDeleteToWatch}
          handleMoveToWatched={props.handleMoveToWatched}
          userInfo={props.userInfo}
        />
        <Watched
          btnClick={props.btnClick}
          setBtnClick={props.setBtnClick}
          lists={props.lists}
          user={props.user}
          handleDeleteWatched={props.handleDeleteWatched}
          userInfo={props.userInfo}
        />
      </div>
    </div>
  );
}

export default WatchList;
