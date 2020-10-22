import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import WatchList from "./pages/WatchList";
import API from "./utils/API"

function App() {
  const [data, setData] = useState(null);
  
  return (
    <Router>
      <Header />
      <Nav data={data} />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home getUser={API.getUser} data={data} />
        </Route>
        <Route exact path="/login">
          <LogIn login={API.login} getUser={API.getUser} />
        </Route>
        <Route exact path="/signup">
          <SignUp register={API.register} getUser={API.getUser} />
        </Route>
        <Route exact path="/watchlist">
          <WatchList getUser={API.getUser} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
