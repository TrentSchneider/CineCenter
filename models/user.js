const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    },

    towatch: [],
    watched: []
  },
  { strict: false }
);

module.exports = Users = mongoose.model("Users", UserSchema);
