import React from "react";
import { Link } from "react-router-dom";

function MovieResult(props) {
  if (props.searchResult.length === 0) {
    return (
      <div className="card col-12 bf text-center">
        <h3>No Results</h3>
      </div>
    );
  } else {
    return (
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-3">
            {/* <div className="card-deck"> */}
            {props.searchResult.Search.map((data, i) => (
              <div class="col mb-2 mt-2">
                <div className="card h-100 text-center mt pb-2 pt-2" data-id={data.imdbID}>
                  <Link
                    className="col-12"
                    to={{
                      pathname: "/movie/" + data.imdbID,
                      state: { isLoggedIn: true, selectedResult: true }
                    }}
                    // onClick={props.setSelectedResult(data.imdbID)}
                    key={i}
                  >
                    <h6 className="bf">{data.Title}</h6>
                    <img
                      src={data.Poster}
                      alt={data.Title}
                      className="card-img-top img-flex mb-1 "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
     
    );
  }
}

export default MovieResult;
