import React, { useEffect, useState } from "react";
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
import MovieSearch from "./pages/MovieSearch";
import API from "./utils/API";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [loginEmail, setLoginEmail] = useState("test@test.com");
  const [loginPassword, setLoginPassword] = useState("password");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchMovie, setSearchMovie] = useState("the+lion+king");

  useEffect(() => {
    // window.location.replace(process.env.PUBLIC_URL + "/home");
  }, [isLoggedIn]);

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }
  function handleLoginClick(event) {
    event.preventDefault();
    API.login(loginEmail, loginPassword).then(res => {
      setIsLoggedIn(true);
    });
  }
  function handleRegisterClick(event) {
    event.preventDefault();
    API.register(registerUsername, registerEmail, registerPassword).then(() => {
      API.login(registerEmail, registerPassword).then(() => {
        setIsLoggedIn(true);
      });
    });
  }

  function handleSearchClick(event) {
    event.preventDefault();
    API.searchMovie(searchMovie)
      .then(res => {
        console.log("movie search data", res.data);
        console.log("year", res.data.Year);
        setSearchResult(res.data);
        console.log("searchResult", searchResult);
      })
      .catch(err => console.log("err", err));
  }

  if (isLoggedIn) {
    console.log("is logged in", isLoggedIn);

    API.getUser().then(res => {
      setData(res.data);
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
          <Route exact path="/moviesearch">
            <MovieSearch
              searchResult={searchResult}
              setSearchMovie={setSearchMovie}
              handleSearchClick={handleSearchClick}
            />
          </Route>
        </div>
        <Footer />
      </Router>
    );
  } else {
    console.log("is logged in", isLoggedIn);
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
            <Route exact path="/moviesearch">
              <MovieSearch
                searchResult={searchResult}
                setSearchMovie={setSearchMovie}
                handleSearchClick={handleSearchClick}
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
