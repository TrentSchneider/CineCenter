import axios from "axios";

export default {
  register: function (registerEmail, registerUsername, registerPassword) {
    axios({
      method: "POST",
      data: {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: process.env.PUBLIC_URL + "/api/signup"
    });
  },
  login: function (loginEmail, loginPassword) {
    axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword
      },
      withCredentials: true,
      url: process.env.PUBLIC_URL + "/api/login"
    });
  },
  getUser: function () {
    axios({
      method: "GET",
      withCredentials: true,
      url: process.env.PUBLIC_URL + "/api/user"
    }).then(res => setData(res.data));
  }
};
