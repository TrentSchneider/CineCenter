import React from "react";

function Watched(props) {
  console.log("props.watchedList", props.lists.watched);
  return (
    <div className="card col-5">
      <h1>Watched List</h1>
      {props.lists.watched.map((data, i) => (
        <div className="card" key={i}>
          <p>Title: {data.Title}</p>
          <img src={data.Poster} alt={data.Title} />
          <button
            onClick={() => {
              props.handleDeleteToWatch(props.user.id, data);
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
      ))}
    </div>
  );
}

export default Watched;
