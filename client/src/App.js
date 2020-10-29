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
import MovieInfo from "./pages/MovieInfo";
import API from "./utils/API";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("test3@test.com");
  const [loginPassword, setLoginPassword] = useState("password");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [addToWatch, setAddToWatch] = useState([]);
  const [moveMovie, setMoveMovie] = useState([]);
  const [user, setUser] = useState([]);
  // let user=[]
  useEffect(() => {
    console.log("user after login", user);
  }, [isLoggedIn, user]);

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }
  function handleLoginClick(event) {
    event.preventDefault();
    API.login(loginEmail, loginPassword).then(res => {
      console.log(res.data);

      setUser({
        id: res.data._id,
        username: res.data.username,
        towatch: res.data.towatch,
        watched: res.data.watched
      });
      console.log("user after login", user);

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
        setSearchResult(res.data);
      })
      .catch(err => console.log("err", err));
  }

  function handleAddToWatch(event) {
    event.preventDefault();
    // setAddToWatch(user.id,searchResult.Title,searchResult.Poster );
    API.addToWatch(user.id, searchResult.Title, searchResult.Poster).then(
      res => {
        console.log("added to towatch", res.data);
      }
    );
  }

  function handleMoveToWatched(id, title, poster) {
    API.addToWatched(id, title, poster).then(() => {
      // API.deleteToWatch(id, title).then(res => {
      //   console.log("moved to watched", res.data);
      // });
    });
  }

  if (isLoggedIn) {
    console.log("is logged in", isLoggedIn);

    // API.getUser().then(res => {
    //   setData(res.data);
    //   console.log("res.data",res.data);
    // });
    return (
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
                handleMoveToWatched={handleMoveToWatched}
              />
            </Route>
          </Switch>
          <Route exact path="/moviesearch">
            <MovieSearch
              searchResult={searchResult}
              setSearchMovie={setSearchMovie}
              handleSearchClick={handleSearchClick}
            />
          </Route>
          <Route exact path="/movie">
            <MovieInfo
              searchResult={searchResult}
              user={user}
              handleAddToWatch={handleAddToWatch}
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
            <Route exact path="/movie">
              <MovieInfo searchResult={searchResult} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
