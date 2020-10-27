import React from "react";

function MovieInfo(props) {
    console.log("movie info", props.searchResult)
  return (
    <div className="card col-8">
      <div className="card">
        <p>Title: {props.searchResult.Title}</p>
        <img src={props.searchResult.Poster} alt={props.searchResult.Title} />
        <p>Year: {props.searchResult.Year}</p>
        <p>Description: {props.searchResult.Plot}</p>
      </div>
    </div>
  );
}

export default MovieInfo;
