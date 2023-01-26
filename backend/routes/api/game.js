import express from "express";

import { Game } from "../../models/Game.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const gameId = req.params.id;
  const specificGame = await Game.find();
  console.log(specificGame);
  return res.json(specificGame);
});

router.post("/", async (req, res) => {
  console.log("in post game");
  console.log(req.body);
  const {
    gameName,
    genre,
    description,
    developer,
    publisher,
    price,
    earlyAccess,
  } = req.body;

  const newGame = new Game({
    name: gameName,
    genre,
    description,
    developer,
    publisher,
    price,
    earlyAccess,
  });

  newGame.save();

  console.log(newGame);

  res.json("Hello Post");
});

router.put("/", (req, res) => {
  res.json("Hello Put");
});

router.delete("/", (req, res) => {
  res.json("Hello Delete");
});

export const gameRouter = router;
