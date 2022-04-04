const axios = require("axios");

const Game = require("../model/gameModel");

exports.goToGame = async (req, res) => {
  res.redirect("/games");
};

exports.getGamesPage = async (req, res) => {
  try {
    const games = await Game.find();
    res.render("index", { games: games });
  } catch (err) {
    throw {
      status: err.status,
      message: "Couldn't get games",
      reason: err,
    };
  }
};

exports.createGamePage = async (req, res) => {
  try {
    res.render("create", {});
  } catch (err) {
    throw {
      status: err.status,
      message: "All fields should be filled",
      reason: err,
    };
  }
};

exports.updateGamePage = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.render("edit", { game: game });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
