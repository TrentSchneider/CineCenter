import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieInfo(props) {
  const [movieID, setMovieID] = useState(useParams().id);
  const [movieResults, setMovieResults] = useState({
    Title: "test",
    Year: "1234",
    Poster: "",
    Plot: "asfasdfsafsf",
    imdbID: ""
  });
  useEffect(() => {
    console.log("movie state", movieResults);
  }, [movieResults]);
  useEffect(() => {
    console.log("running");
    console.log("selectedResults", props.selectedResult);
    props.API.findMovie(movieID).then(res => {
      console.log("find movie res", res);
      setMovieResults(res.data);
    });
  }, []);
  console.log("movie info", props.selectedResult);
  console.log("Movie ID", movieID);
  console.log("user", props.user);
  let addBtn;
  if (props.isLoggedIn) {
    props.user.towatch.forEach(e => {
      if (movieResults.Title === e) {
        addBtn = <button>Already on Watch List</button>;
      }
    });
    if (addBtn === undefined) {
      addBtn = (
        <button
          onClick={() => {
            props.handleAddToWatch(movieResults);
          }}
        >
          Add to Watch List
        </button>
      );
    }

    console.log("final movieResults", movieResults);

    return (
      <div className="card col-8">
        <div className="card">
          <p>Title: {movieResults.Title}</p>
          <img src={movieResults.Poster} alt={movieResults.Title} />
          <p>Year: {movieResults.Year}</p>
          <p>Description: {movieResults.Plot}</p>
          {addBtn}
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-8">
        <div className="card">
          <p>Title: {movieResults.Title}</p>
          <img src={movieResults.Poster} alt={movieResults.Title} />
          <p>Year: {movieResults.Year}</p>
          <p>Description: {movieResults.Plot}</p>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
