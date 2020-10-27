import axios from "axios";

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
  getUser: function () {
    return axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user"
    });
  },
  searchMovie: function (searchMovie) {
    let queryURL =
      "https://www.omdbapi.com/?t=" + searchMovie + "&apikey=trilogy";
    console.log("----------------");
    console.log("query url", queryURL);
    return axios.get(queryURL);
  }
};
