const express = require("express");
const backFuncs = require("../controllers/backFuncs.js");
const gameFuncs = require("../controllers/gameFuncs.js");
const router = express.Router();

router.route("/").get(gameFuncs.goToGame);

router.route("/backend/games");
router.route("/backend/games").get(backFuncs.getGames);
router.route("/backend/games").post(backFuncs.createGame);
router.route("/backend/games/:id");
router.route("/backend/games/:id").get(backFuncs.getGame);
router.route("/backend/games/:id").post(backFuncs.updateGame);
router.route("/backend/games/delete/:id").get(backFuncs.deleteGame);
router.route("/games").get(gameFuncs.getGamesPage);
router.route("/games/create").get(gameFuncs.createGamePage);
router.route("/games/update/:id").get(gameFuncs.updateGamePage);
router.route("/games/delete").get(gameFuncs.deleteGame);

module.exports = router;
