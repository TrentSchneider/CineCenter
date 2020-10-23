const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function () {
  passport.use(
    new LocalStrategy((email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) throw err;
          if (results === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) =>
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username
      };
      cb(err, userInformation);
    })
  );
};
