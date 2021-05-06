const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const audioSchema = new Schema({
  imageURL: {
    type: String,
    required: true,
  },
  audioURL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  audioWords: {
    type: String,
    required: true,
  },
  audioTime: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  releasedDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("audio", audioSchema);
