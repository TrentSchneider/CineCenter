const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

// Telling passport we want to use a Local Strategy.
passport.use(
  new LocalStrategy(
    // Set up using email address to sign in instead of username
    {
      usernameField: "email"
    },
    (email, password, done) => {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(dbUser => {
        // Validations for incorrect email/password
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        return done(null, dbUser);
      });
    }
  )
);

// Serializes/deserializes the authentication
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
