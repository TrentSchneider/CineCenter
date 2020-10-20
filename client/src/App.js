import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/watchlist">
          <WatchList />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
