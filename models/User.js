const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
nom: String,
prenom: String,
email: String,
motDePasse: {
  min: 4,
  required: true,
  type: String,
},
role: {
  type: String,
  enum: ["admin", "editor", "user"],
  default: "user",
},
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;