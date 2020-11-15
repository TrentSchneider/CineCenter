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
    return axios.get(queryURL);
  },
  findMovie: function (selectedResult) {
    let queryURL =
      "https://www.omdbapi.com/?i=" + selectedResult + "&apikey=trilogy";
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
    return axios({
      method: "PUT",
      data: { data },
      withCredentials: true,
      url: "/api/towatch/move"
    });
  },
  deleteToWatch: function (data) {
    let { imdbID } = data;
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
  getTrailers: function () {
    // const key = Map_PW;
    const key = process.env.REACT_APP_API;
    let queryURL =
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-&key=" +
      key;
    return axios.get(queryURL);
  }
};
