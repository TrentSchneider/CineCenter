const bcrypt = require("bcryptjs");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
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

// passport.use(
//   new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//     User.findOne({ email: email })
//       .then(user => {
//         if (!user) {
//           const newUser = new User({ email, password });
//           bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//               if (err) throw err;
//               newUser.password = hash;
//               newUser
//                 .save()
//                 .then(user => {
//                   return done(null, user);
//                 })
//                 .catch(err => {
//                   return done(null, false, { message: err });
//                 });
//             });
//           });
//         } else {
//           bcrypt.compare(password, user.password, (err, isMatch) => {
//             if (err) throw err;
//             if (isMatch) {
//               return done(null, user);
//             } else {
//               return done(null, false, { message: "Incorrect password" });
//             }
//           });
//         }
//       })
//       .catch(err => {
//         return done(null, flase, { message: err });
//       });
//   })
// );
// // Serializes/deserializes the authentication
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id,done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// module.exports = passport;
