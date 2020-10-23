import React from "react";

function ToWatch(props) {
  return (
    <div className="card col-5">
      {props.data.list.towatch.map((data, i) => (
        <div className="card" key={i}>
          <p>Title: {data.title}</p>
          <img src={data.image} alt={data.title} />
          <p>Year: {data.year}</p>
          <p>Description: {data.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ToWatch;
