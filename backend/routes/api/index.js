import express from "express";
import { userRouter } from "./user.js";
import { gameRouter } from "./game.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/game", gameRouter);

export const apiRouter = router;
