import React from "react";
import { Link } from "react-router-dom";

function MovieResult(props) {
  console.log("movie component data", props.searchResult);
  if (props.searchResult.length === 0) {
    return (
      <div className="card col-12 bf text-center">
        <h3>No Results</h3>
      </div>
    );
  } else {
    return (
      <div className="card col-12 bf">
        <div className="container m-0 p-0">
          <div className="row m-0 p-0">
            {props.searchResult.Search.map((data, i) => (
              <Link
                className="col-3"
                to={{
                  pathname: "/movie/" + data.imdbID,
                  state: { isLoggedIn: true, selectedResult: true }
                }}
                // onClick={props.setSelectedResult(data.imdbID)}
                key={i}
              >
                <div className="card col-12 text-center" data-id={data.imdbID}>
                  <h6 className="bf">{data.Title}</h6>
                  <img
                    src={data.Poster}
                    alt={data.Title}
                    className="col-11 mb-1 img-fluid"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieResult;
