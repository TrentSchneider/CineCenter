import React from "react";

function ToWatch(props) {
  return (
    <div className="card col-5">
      {props.data.list.towatch.map((data, i) => (
        <div className="card" key={i}>
          <p>Title: {data.Title}</p>
          <img src={data.Poster} alt={data.Title} />
          <p>Year: {data.Year}</p>
          <p>Description: {data.Plot}</p>
        </div>
      ))}
    </div>
  );
}

export default ToWatch;
