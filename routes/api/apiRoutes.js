const compression = require("compression");
const express = require("express");
const router = express.Router();
const User = require("../../models/user");
// const passport = require("../../config/passport");
const passport = require("passport");
const app = express();
const bcrypt = require("bcryptjs");

// app.use(compression());

router
  .route("/login")
  // .post(passport.authenticate("local", { session: false }), (req, res) => {
  .post(passport.authenticate("local"), (req, res) => {
    res.json(req.user);
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
  // let { id } = req.body;
  // User.findById(id).then(
  //   () => res.json(req.user)
  // );
  if (req.user) {
    res.json({ user: req.user });
    console.log("user found");
  } else {
    res.json({ user: null });
    console.log("user not found");
  }
});

router.get("/lists", (req, res) => {
  User.findOne({ _id: req.user.id })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

// Route for logging user out
router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {});
});

// movie schema = Movie
router.route("/towatch/add").put((req, res) => {
  let data = req.body.data;
  console.log("req.user", req.user);
  User.updateOne({ _id: req.user.id }, { $push: { towatch: data } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.route("/towatch/move").put((req, res) => {
  let { imdbID } = req.body.data;
  let movieData = req.body.data;
  console.log("route data");
  User.updateOne({ _id: req.user.id }, { $pull: { towatch: { imdbID } } })
    .then(response => {
      console.log("movie data", movieData);
      User.updateOne(
        { _id: req.user.id },
        { $push: { watched: { movieData } } }
      )
        .then(data => {
          res.json(data);
        })
    })
    .catch(err => res.send(err));
});

router.route("/watched/add").put((req, res) => {
  let movieData = req.body.data;
  User.updateOne({ _id: req.user.id }, { $push: { watched: { movieData } } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.route("/towatch/remove").put((req, res) => {
  console.log("towatch remove route reached");
  let { imdbID } = req.body.data;
  console.log("req.body", req.body);
  console.log("req.user.id", req.user.id);
  User.updateOne({ _id: req.user.id }, { $pull: { towatch: { imdbID } } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.route("/watched/remove").put((req, res) => {
  let { imdbID } = req.body.data;
  User.updateOne({ _id: req.user.id }, { $pull: { watched: { imdbID } } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

// router.route("/api/towatch").get((req, res) => {
//   User.findById;
// });

// router.get("/dummy", (req, res) => {
//   res.send("dummy");
// });
module.exports = router;
