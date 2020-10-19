const compression = require("compression");
const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../config/passport");
const app = express();

app.use(compression());

// route for the API login that also uses passport authentication
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  
  // route for API signup
  router.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  
  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  