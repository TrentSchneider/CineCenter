import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
// import Header from "./components/Header";
import SignedInNav from "./components/Nav/SignedInNav";
import SignedOutNav from "./components/Nav/SignedOutNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import WatchList from "./pages/WatchList";
import MovieSearch from "./pages/MovieSearch";
import MovieInfo from "./pages/MovieInfo";
import MapWrapper from "./pages/MapWrapper";
import API from "./utils/API";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [lists, setLists] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");
  const [btnClick, setBtnClick] = useState(false);

  useEffect(() => {
    userInfo();
  }, [isLoggedIn]);
  useEffect(() => {
    console.log("user updated", user);
    if (isLoggedIn) {
      console.log("user id", user.id);
    }
  }, [user]);
  useEffect(() => {
    if (isLoggedIn) {
      userLists();
    }
  }, [btnClick]);
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
    });
  }

  function handleDeleteToWatch(data) {
    API.deleteToWatch(data).then(res => {
      console.log("removed from towatch", res.data);
    });
  }

  function handleDeleteWatched(data) {
    API.deleteWatched(data).then(res => {
      console.log("removed from watched", res.data);
    });
  }
  function userLists() {
    API.getLists().then(res => {
      setLists({
        towatch: res.data.towatch,
        watched: res.data.watched
      });
    });
  }
  function userInfo() {
    API.getUser().then(res => {
      if (res.data.user) {
        setUser({
          id: res.data.user.id,
          username: res.data.user.username
        });
        if (res.data.user) {
          setIsLoggedIn(true);
        }
      }
    });
  }

  if (isLoggedIn) {
    return (
      <div className="backC">
        <Router>
          {/* <Header user={user} /> */}
          <SignedInNav handleLogoutClick={handleLogoutClick} />
          <div className="layer">
            <Switch>
              <Route exact path={["/", "/home"]}>
                <Home user={user} API={API} />
              </Route>
              <Route exact path="/watchlist">
                <WatchList
                  userLists={userLists}
                  lists={lists}
                  setLists={setLists}
                  user={user}
                  handleDeleteToWatch={handleDeleteToWatch}
                  handleMoveToWatched={handleMoveToWatched}
                  handleDeleteWatched={handleDeleteWatched}
                  setBtnClick={setBtnClick}
                  btnClick={btnClick}
                />
              </Route>
              <Route exact path="/login">
                <Redirect to="/" />
              </Route>
              <Route exact path="/signup">
                <Redirect to="/" />
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
                  isLoggedIn={isLoggedIn}
                  userLists={userLists}
                  lists={lists}
                  setLists={setLists}
                  searchResult={searchResult}
                  user={user}
                  handleAddToWatch={handleAddToWatch}
                  userInfo={userInfo}
                  selectedResult={selectedResult}
                  API={API}
                  setBtnClick={setBtnClick}
                />
              </Route>
              <Route exact path="/map">
                <MapWrapper API={API} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  } else {
    return (
      <div className="backC">
        <Router>
          {/* <Header /> */}
          <SignedOutNav />
          <div className="layer backH">
            <Switch>
              <Route exact path={["/", "/home"]}>
                <Home API={API} />
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
                  setLists={setLists}
                  isLoggedIn={isLoggedIn}
                />
              </Route>
              <Route exact path="/watchlist">
                <Redirect to="/" />
              </Route>
              <Route exact path="/signup">
                <SignUp
                  API={API}
                  user={user}
                  setUser={setUser}
                  setIsLoggedIn={setIsLoggedIn}
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
                  isLoggedIn={isLoggedIn}
                  setBtnClick={setBtnClick}
                />
              </Route>
              <Route exact path="/map">
                <MapWrapper API={API} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
