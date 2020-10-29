import React from "react";

function ToWatch(props) {
  console.log("props.toWatchList", props.user.towatch);
  return (
    <div className="card col-5">
      <h1>To Watch List</h1>
      {props.user.towatch.map((data, i) => (
        <div className="card" key={i}>
          <p>Title: {data.Title}</p>
          <img src={data.Poster} alt={data.Title} />
          <p>Year: {data.Year}</p>
          <p>Description: {data.Plot}</p>
          <button
            onClick={() =>
              props.handleMoveToWatched(props.user.id, data.Title, data.Poster)
            }
          >
            Move to Watched List
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToWatch;
