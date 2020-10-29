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
  .post(passport.authenticate("local", { session: false }), (req, res) => {
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
  res.send(req.user);
  // res.send("dummy");
});

// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.route("/towatch/add/:id").put((req, res) => {
  let { Title, Poster } = req.body;
  User.updateOne(
    { _id: req.params.id },
    { $push: { towatch: { Title, Poster } } }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.route("/towatch/remove/:id").put((req, res) => {
  let { Title } = req.body;
  User.updateOne({ _id: req.params.id }, { $remove: { towatch: { Title } } })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.route("/watched/add/:id").put((req, res) => {
  let { Title, Poster } = req.body;
  User.updateOne(
    { _id: req.params.id },
    { $push: { watched: { Title, Poster } } }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.route("/watched/remove/:id").put((req, res) => {
  let { Title } = req.body;
  User.updateOne({ _id: req.params.id }, { $remove: { watched: { Title } } })
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
