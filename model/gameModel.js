const mongoose = require("mongoose");

const game = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "game must have a title"],
  },
  description: {
    type: String,
    required: [true, "game must have a description"],
  },
  price: {
    type: Number,
    required: [true, "game must have a price"],
  },
  image: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/771/771292.png",
  },
});

const Game = mongoose.model("Game", game);
module.exports = Game;
