import React from "react";

function Watched(props) {
  console.log("props.watchedList", props.user.watched);
  return (
    <div className="card col-5">
      <h1>Watched List</h1>
      {props.user.watched.map((data, i) => (
        <div className="card" key={i}>
          <p>Title: {data.Title}</p>
          <img src={data.Poster} alt={data.Title} />
           <button
            onClick={() => {
              props.handleDeleteToWatch(props.user.id, data);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Watched;
