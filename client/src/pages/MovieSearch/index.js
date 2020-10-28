import React from "react";
import MovieResult from "../../components/MovieResult";

function MovieSearch(props) {
  console.log("data", props.searchResult);
  return (
    <div className="d-flex justify-content-center">
      <div className="card col-8">
        <form>
          <div className="form-group">
            <label htmlFor="inputMovie">Movie Title</label>
            <input
              type="text"
              className="form-control"
              id="inputMovie"
              aria-describedby="inputMovieHelp"
              placeholder="Movie Title"
              onChange={e => props.setSearchMovie(e.target.value)}
            />
            <small id="inputMovieHelp" className="form-text text-muted">
              Search:
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.handleSearchClick}
          >
            Submit
          </button>
        </form>
        <MovieResult searchResult={props.searchResult} />
      </div>
    </div>
  );
}

export default MovieSearch;
