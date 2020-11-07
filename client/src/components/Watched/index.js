import React from "react";
import { Link } from "react-router-dom";

function Watched(props) {
  console.log("props.watchedList", props.lists.watched);
  return (
    <div className="card col-5 bf lg mt-1 mb-1">
      <h1 className="text-center">Watched List</h1>
      {props.lists.watched.map((data, i) => (
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
                props.handleDeleteWatched(data);
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

export default Watched;
