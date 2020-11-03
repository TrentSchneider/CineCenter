import React from "react";
import { Link } from "react-router-dom";

function MovieResult(props) {
  console.log("movie component data", props.searchResult);
  if (props.searchResult.length === 0) {
    return (
      <div className="card col-12">
        <h3>No Results</h3>
      </div>
    );
  } else {
    return (
      <div className="card col-12">
        {props.searchResult.Search.map((data, i) => (
          <Link
            to={{
              pathname: "/movie/" + data.imdbID,
              state: { isLoggedIn: true, selectedResult: true }
            }}
            onClick={props.setSelectedResult(data.imdbID)}
            key={i}
          >
            <div className="card" data-id={data.imdbID}>
              <p>Title: {data.Title}</p>
              <img src={data.Poster} alt={data.Title} />
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default MovieResult;
