const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  englishTitle: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  lyrics: {
    type: String,
    required: true,
  },
  englishLyrics: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  link: {
    type: String,
  },
  scale: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Song", songSchema);
