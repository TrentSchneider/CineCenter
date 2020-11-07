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
    if (props.isLoggedIn) {
      props.userLists();
    }
  }, [movieResults]);
  useEffect(() => {
    props.API.findMovie(movieID).then(res => {
      setMovieResults(res.data);
    });
  }, []);
  let addBtn;
  if (props.isLoggedIn) {
    props.lists.towatch.forEach(e => {
      if (movieResults.imdbID === e.imdbID) {
        addBtn = (
          <button className="btn btn-dark m-1">Already on Watch List</button>
        );
      }
    });
    if (addBtn === undefined) {
      addBtn = (
        <button
          className="btn btn-dark m-1"
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


    return (
      <div className="d-flex justify-content-center">
        <div className="card col-8">
          <div className="card bf p-4">
            <h4 className="text-center">{movieResults.Title}</h4>
            <div className="d-flex justify-content-center">
              <img src={movieResults.Poster} alt={movieResults.Title} />
            </div>
            <div className="d-flex justify-content-center">{addBtn}</div>
            <p>
              <b>IMDB Rating:</b> {movieResults.imdbRating}/10
            </p>
            <p>
              <b>Genre:</b> {movieResults.Genre}
            </p>
            <p>
              <b>Year:</b> {movieResults.Year}
            </p>
            <p>
              <b>Description:</b> {movieResults.Plot}
            </p>
            <p>
              <b>Actors:</b> {movieResults.Actors}
            </p>
            <p>
              <b>Director:</b> {movieResults.Director}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="card col-sm-12 col-md-8">
          <div className="card bf p-4">
            <h4 className="text-center">{movieResults.Title}</h4>
            <img src={movieResults.Poster} alt={movieResults.Title} />
            <p>
              <b>IMDB Rating:</b> {movieResults.imdbRating}/10
            </p>
            <p>
              <b>Genre:</b> {movieResults.Genre}
            </p>
            <p>
              <b>Year:</b> {movieResults.Year}
            </p>
            <p>
              <b>Description:</b> {movieResults.Plot}
            </p>
            <p>
              <b>Actors:</b> {movieResults.Actors}
            </p>
            <p>
              <b>Director:</b> {movieResults.Director}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
