import React, { useState } from "react";
import MovieResult from "../../components/MovieResult";

function MovieSearch(props) {
  const [searchMovie, setSearchMovie] = useState("");

  function handleSearchClick(event) {
    event.preventDefault();
    props.API.searchMovie(searchMovie)
      .then(res => {
        props.setSearchResult(res.data);
      })
      .catch(err => console.log("err", err));
  }

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
              onChange={e => setSearchMovie(e.target.value)}
            />
            <small id="inputMovieHelp" className="form-text text-muted">
              Search:
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSearchClick}
          >
            Submit
          </button>
        </form>
        <MovieResult
          searchResult={props.searchResult}
          setSelectedResult={props.setSelectedResult}
        />
      </div>
    </div>
  );
}

export default MovieSearch;
