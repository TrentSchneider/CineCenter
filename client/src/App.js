import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import SignedInNav from "./components/Nav/SignedInNav";
import SignedOutNav from "./components/Nav/SignedOutNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import WatchList from "./pages/WatchList";
import MovieSearch from "./pages/MovieSearch";
import MovieInfo from "./pages/MovieInfo";
import Map from "./pages/Map";
import API from "./utils/API";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: "testID",
    email: "testEmail",
    username: "testUsername",
    towatch: [{ Title: "test1" }, { Title: "test2" }],
    watched: [{ Title: "test4" }, { Title: "test4" }]
  });
  const [searchResult, setSearchResult] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");

  useEffect(() => {
    userInfo();
  }, [isLoggedIn]);
  useEffect(() => {
    console.log("user updated", user);
    console.log("user id", user.id);
  }, [user]);

  function handleLogoutClick() {
    API.logout().then(() => {
      setIsLoggedIn(false);
    });
  }

  function handleAddToWatch(data) {
    // setAddToWatch(user.id,searchResult.Title,searchResult.Poster );
    API.addToWatch(data).then(res => {
      console.log("added to towatch", res.data);
    });
  }

  function handleMoveToWatched(data) {
    API.moveToWatch(data).then(res => {
      console.log("moved from towatch to watched", res.data);
      // userInfo();
    });
  }

  function handleDeleteToWatch(data) {
    API.deleteToWatch(data).then(res => {
      console.log("removed from towatch", res.data);
      // userInfo();
    });
  }

  function handleDeleteWatched(data) {
    API.deleteWatched(data).then(res => {
      console.log("removed from watched", res.data);
    });
  }

  function userInfo() {
    API.getUser().then(res => {
      console.log("get user response", res.data);
      setUser({
        id: res.data._id,
        email: res.data.email,
        username: res.data.username,
        towatch: res.data.towatch,
        watched: res.data.watched
      });
      if (res.data.user) {
        setIsLoggedIn(true);
      }
    });
  }

  if (isLoggedIn) {
    console.log("is logged in", isLoggedIn);
    return (
      <div className="backC">
        <Router>
          <Header user={user} />
          <SignedInNav handleLogoutClick={handleLogoutClick} />
          <div className="layer">
            <Switch>
              <Route exact path={["/", "/home"]}>
                <Home user={user} />
              </Route>
              <Route exact path="/watchlist">
                <WatchList
                  user={user}
                  handleDeleteToWatch={handleDeleteToWatch}
                  handleMoveToWatched={handleMoveToWatched}
                  handleDeleteWatched={handleDeleteWatched}
                />
              </Route>
              <Route exact path="/moviesearch">
                <MovieSearch
                  API={API}
                  setSearchResult={setSearchResult}
                  searchResult={searchResult}
                  setSelectedResult={setSelectedResult}
                />
              </Route>
              <Route exact path="/movie/:id">
                <MovieInfo
                  searchResult={searchResult}
                  user={user}
                  handleAddToWatch={handleAddToWatch}
                  userInfo={userInfo}
                  selectedResult={selectedResult}
                  API={API}
                />
              </Route>
              <Route exact path="/map">
                <Map />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  } else {
    console.log("is logged in", isLoggedIn);
    return (
      <div className="backC">
        <Router>
          <Header />
          <SignedOutNav />
          <div className="layer backH">
            <Switch>
              <Route exact path={["/", "/home"]}>
                <Home />
              </Route>
              <Route exact path="/login">
                <LogIn
                  // handleLoginClick={handleLoginClick}
                  // setLoginEmail={setLoginEmail}
                  // setLoginPassword={setLoginPassword}
                  API={API}
                  user={user}
                  setUser={setUser}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </Route>
              <Route exact path="/signup">
                <SignUp
                  API={API}
                  user={user}
                  setUser={setUser}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </Route>
            </Switch>

            <Route exact path="/moviesearch">
              <MovieSearch
                API={API}
                setSearchResult={setSearchResult}
                searchResult={searchResult}
                setSelectedResult={setSelectedResult}
              />
            </Route>
            <Route exact path="/movie/:id">
              <MovieInfo
                searchResult={searchResult}
                user={user}
                handleAddToWatch={handleAddToWatch}
                userInfo={userInfo}
                selectedResult={selectedResult}
                API={API}
                isLoggedIn={isLoggedIn}
              />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
