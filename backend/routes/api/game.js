import express from "express";

import { Game } from "../../models/Game.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const gameId = req.params.id;
  const specificGame = await Game.find();
  console.log(specificGame);
  return res.json(specificGame);
});

router.post("/", async (req, res) => {
  console.log("in post game");
  console.log(req.body);
  const { gameName } = req.body;
  console.log(gameName);
  res.json("Hello Post");
});

router.put("/", (req, res) => {
  res.json("Hello Put");
});

router.delete("/", (req, res) => {
  res.json("Hello Delete");
});

export const gameRouter = router;
