import express from "express";
import { gameRouter } from "./game.js";

const router = express.Router();

router.use("/game", gameRouter);

router.get("/", (req, res) => {
  res.json(1);
});

router.post("/testPost", (req, res) => {
  res.json("Hello Post");
});

router.put("/testPut", (req, res) => {
  res.json("Hello Put");
});

router.delete("/testDelete", (req, res) => {
  res.json("Hello Delete");
});

export const apiRouter = router;
