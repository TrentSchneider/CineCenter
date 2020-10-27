import React from "react";

function MovieResult(props) {
  console.log("movie component data", props.searchResult);
  if (props.searchResult.length === 0) {
    return (
      <div className="card col-5">
        <h3>No Results</h3>
      </div>
    );
  } else if (props.searchResult.length > 1) {
    return (
      <div className="card col-5">
        {props.searchResult.map((data, i) => (
          <div className="card" key={i}>
            <p>Title: {data.title}</p>
            <img src={data.poster} alt={data.title} />
          </div>
        ))}
      </div>
    );
  } else {
    console.log("title", props.searchResult.Title)
    return (
      <div className="card col-5">
        <div className="card">
          <p>Title: {props.searchResult.Title}</p>
          <img src={props.searchResult.Poster} alt={props.searchResult.Title} />
        </div>
      </div>
    );
  }
}

export default MovieResult;
