import React from "react";

function MovieInfo(props) {
  console.log("movie info", props.searchResult);
  console.log("user", props.user);
  let addBtn;
  props.user.towatch.forEach(e => {
    if (props.searchResult.Title === e) {
      addBtn = <button>Already on Watch List</button>;
    }
  });
  if (addBtn === undefined) {
    addBtn = (
      <button
        onClick={() => {
          props.handleAddToWatch(props.searchResult);
        }}
      >
        Add to Watch List
      </button>
    );
  }

  return (
    <div className="card col-8">
      <div className="card">
        <p>Title: {props.searchResult.Title}</p>
        <img src={props.searchResult.Poster} alt={props.searchResult.Title} />
        <p>Year: {props.searchResult.Year}</p>
        <p>Description: {props.searchResult.Plot}</p>
        {addBtn}
      </div>
    </div>
  );
}

export default MovieInfo;
