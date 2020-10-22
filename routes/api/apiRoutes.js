const compression = require("compression");
const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const passport = require("../../config/passport");
const app = express();
const bcrypt = require("bcryptjs");

app.use(compression());

// route for the API login that also uses passport authentication
router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, err => {
        if (err) throw err;
        res.send("Succesfully Authenticated");
      });
    }
  });
});

// route for API signup
router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

router.get("/user", (req, res) => {
  res.send(req.user);
});

// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
