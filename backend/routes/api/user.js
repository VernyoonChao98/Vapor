import express from "express";
import bcrypt from "bcryptjs";

import { User } from "../../models/User.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { username, email, password, avatarUrl } = req.body;

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = new User({
    username,
    email,
    hashedPassword,
    avatarUrl,
  });

  newUser.save();

  console.log(newUser);
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
  res.json("Hello Delete");
});

export const userRouter = router;
