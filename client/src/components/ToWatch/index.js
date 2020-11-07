import React from "react";
import { Link } from "react-router-dom";

function ToWatch(props) {
  console.log("props.toWatchList", props.lists.towatch);
  return (
    <div className="card col-5 bf lg mt-1 mb-1">
      <h1 className="text-center">To Watch List</h1>
      {props.lists.towatch.map((data, i) => (
        <div className="card mt-1 mb-1" key={i}>
          <h3 className="text-center">{data.Title}</h3>
          <Link
            className="d-flex justify-content-center"
            to={{
              pathname: "/movie/" + data.imdbID,
              state: { isLoggedIn: true, selectedResult: true }
            }}
          >
            <img src={data.Poster} className="img-fluid" alt={data.Title} />
          </Link>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark m-1"
              onClick={() => {
                props.handleMoveToWatched(data);
                if (props.btnClick) {
                  props.setBtnClick(false);
                } else {
                  props.setBtnClick(true);
                }
              }}
            >
              Move to Watched List
            </button>
            <button
              className="btn btn-dark m-1"
              onClick={() => {
                props.handleDeleteToWatch(data);
                if (props.btnClick) {
                  props.setBtnClick(false);
                } else {
                  props.setBtnClick(true);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToWatch;
