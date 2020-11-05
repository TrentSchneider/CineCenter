import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

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
    console.log("movie info props", props);
    if (props.isLoggedIn) {
      props.userLists();
    }
  }, [movieResults]);
  useEffect(() => {
    console.log("running");
    console.log("selectedResults", props.selectedResult);
    props.API.findMovie(movieID).then(res => {
      console.log("find movie res", res);
      setMovieResults(res.data);
    });
  }, []);
  console.log("movie info", props.movieResults);
  console.log("Movie ID", movieID);
  console.log("user", props.user);
  console.log("movie lists", props.lists);
  let addBtn;
  if (props.isLoggedIn) {
    console.log("isLoggedIn for movie button", props.isLoggedIn);
    console.log("movie results", movieResults);
    console.log("movie lists", props.lists);
    props.lists.towatch.forEach(e => {
      if (movieResults.imdbID === e.imdbID) {
        addBtn = <button>Already on Watch List</button>;
      }
    });
    if (addBtn === undefined) {
      addBtn = (
        <button
          onClick={() => {
            props.handleAddToWatch(movieResults);
            if (props.btnClick) {
              props.setBtnClick(false);
            } else {
              props.setBtnClick(true);
            }
          }}
        >
          Add to Watch List
        </button>
      );
    }

    console.log("final movieResults", movieResults);

    return (
      <div className="d-flex justify-content-center">
        <div className="card col-8">
          <div className="card bf">
            <h1>Logged in version</h1>
            <p>Title: {movieResults.Title}</p>
            <img src={movieResults.Poster} alt={movieResults.Title} />
            <p>Year: {movieResults.Year}</p>
            <p>Description: {movieResults.Plot}</p>
            {addBtn}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="card col-8">
          <div className="card bf">
            <h1>Logged out version</h1>
            <p>Title: {movieResults.Title}</p>
            <img src={movieResults.Poster} alt={movieResults.Title} />
            <p>Year: {movieResults.Year}</p>
            <p>Description: {movieResults.Plot}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
