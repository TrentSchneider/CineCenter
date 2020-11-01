const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) throw err;
      if (!user)
        return done(null, false, {
          message: "incorrect email"
        });
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) throw err;
        if (res === true) {
          return done(null, user, { message: "valid username/password" });
        } else {
          return done(null, false, { message: "incorrect password" });
        }
      });
    });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) =>
  User.findById(id, (err, user) => {
    const userInformation = {
      id: user._id,
      username: user.username,
    };
    // const userInformation = {
    //   username: "dummyname"
    // };
    cb(err, userInformation);
  })
);

module.exports = passport;
