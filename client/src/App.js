import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SignedInNav from "./components/Nav/SignedInNav";
import SignedOutNav from "./components/Nav/SignedOutNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import WatchList from "./pages/WatchList";
import API from "./utils/API";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }
  function handleLoginClick() {
    API.login(loginEmail, loginPassword);
    setIsLoggedIn(true);
    window.location.replace(process.env.PUBLIC_URL + "/home");
    console.log("login success");
  }
  function handleRegisterClick() {
    API.register(registerUsername, registerEmail, registerPassword).then(
      API.login(registerEmail, registerPassword)
    );
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    API.getUser().then(res => {
      setData(res.data);
      console.log("retrieved user data");
    });
    return (
      <Router>
        <Header data={data} />
        <SignedInNav handleLogoutClick={handleLogoutClick} />
        <div className="layer">
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home data={data} />
            </Route>
            <Route exact path="/watchlist">
              <WatchList data={data} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  } else {
    return (
      <Router>
        <Header />
        <SignedOutNav />
        <div className="layer">
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/login">
              <LogIn
                handleLoginClick={handleLoginClick}
                setLoginEmail={setLoginEmail}
                setLoginPassword={setLoginPassword}
              />
            </Route>
            <Route exact path="/signup">
              <SignUp
                handleRegisterClick={handleRegisterClick}
                setRegisterUsername={setRegisterUsername}
                setRegisterEmail={setRegisterEmail}
                setRegisterPassword={setRegisterPassword}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
