const express = require("express");
const Game = require("../model/gameModel");

exports.getGames = async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json({
      status: "success",
      games: games,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getGame = async (req, res) => {
  try {
    const games = await Game.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        games,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createGame = async (req, res) => {
  try {
    await Game.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.updateGame = async (req, res) => {
  try {
    await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
