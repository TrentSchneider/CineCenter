import axios from "axios";
// import Map_PW from "../pages/Map/MAP_PW";

require("dotenv").config();

export default {
  register: function (registerUsername, registerEmail, registerPassword) {
    return axios({
      method: "POST",
      data: {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: "/api/signup"
    });
  },
  login: function (loginEmail, loginPassword) {
    return axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword
      },
      withCredentials: true,
      url: "/api/login"
    });
  },
  logout: function () {
    return axios({
      method: "GET",
      withCredentials: true,
      url: "/api/logout"
    });
  },
  getUser: function () {
    return axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user"
    });
  },
  getLists: function () {
    return axios({
      method: "GET",
      withCredentials: true,
      url: "/api/lists"
    });
  },
  searchMovie: function (searchMovie) {
    let queryURL =
      "https://www.omdbapi.com/?s=" +
      searchMovie +
      "&type=movie&apikey=trilogy";
    console.log("----------------");
    console.log("query url", queryURL);
    return axios.get(queryURL);
  },
  findMovie: function (selectedResult) {
    let queryURL =
      "https://www.omdbapi.com/?i=" + selectedResult + "&apikey=trilogy";
    console.log("----------------");
    console.log("query url", queryURL);
    return axios.get(queryURL);
  },
  addToWatch: function (data) {
    return axios({
      method: "PUT",
      data: { data },
      withCredentials: true,
      url: "/api/towatch/add"
    });
  },
  addToWatched: function (data) {
    return axios({
      method: "PUT",
      data: { data },
      withCredentials: true,
      url: "/api/watched/add"
    });
  },
  moveToWatch: function (data) {
    console.log("axios data", data);
    return axios({
      method: "PUT",
      data: { data },
      withCredentials: true,
      url: "/api/towatch/move"
    });
  },
  deleteToWatch: function (data) {
    console.log("axios data", data);
    let { imdbID } = data;
    console.log("{imdbID}", imdbID);
    return axios({
      method: "PUT",
      data: { data },
      withCredentials: true,
      url: "/api/towatch/remove"
    });
  },

  deleteWatched: function (data) {
    return axios({
      method: "PUT",
      data: { data },
      withCredentials: true,
      url: "/api/watched/remove"
    });
  },
  getPlaces: function (latitude, longitude) {
    const key = "";
    // const key = process.env.REACT_APP_API;
    let queryURL =
      "https://maps.googleapis.com/maps/api/places/nearbysearch/json?location=" +
      latitude +
      "," +
      longitude +
      "&radius=16093&type=movie_theater&key=" +
      key;
    console.log("----------------");
    console.log("query url", queryURL);
    return axios.get(queryURL);
  },
  getTrailers: function () {
    // const key = "";
    const key = process.env.REACT_APP_API;
    console.log("key", key);
    let queryURL =
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-&key=" +
      key;
    console.log("trailer path reached");
    return axios.get(queryURL);
  }
};
