import React, { useState } from "react";
import MovieResult from "../../components/MovieResult";
import "./style.css";

function MovieSearch(props) {
  const [searchMovie, setSearchMovie] = useState("");

  function handleSearchClick(event) {
    event.preventDefault();
    if (searchMovie !== "") {
      props.API.searchMovie(searchMovie)
        .then(res => {
          props.setSearchResult(res.data);
        })
        .catch(err => console.log("err", err));
    }
  }

  return (
    <div className="d-flex justify-content-center minH-6">
      <div className="card col-8 minH-8-5 bc-lg">
        <form>
          <div className="form-group mt-3">
            <label htmlFor="inputMovie" className="bf">
              <h3> Search Movie Title</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputMovie"
              aria-describedby="inputMovieHelp"
              placeholder="Movie Title"
              onChange={e => setSearchMovie(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark mb-2"
            onClick={handleSearchClick}
          >
            Submit
          </button>
        </form>
        <MovieResult
          searchMovie={searchMovie}
          searchResult={props.searchResult}
          setSelectedResult={props.setSelectedResult}
        />
      </div>
    </div>
  );
}

export default MovieSearch;
