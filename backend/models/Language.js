const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  name: String,
  icon: String,
  programmers: String,
  year: Number,
  votes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Language", LanguageSchema);
