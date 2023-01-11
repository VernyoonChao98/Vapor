import express from "express";

const router = express.Router();

router.get("/testGet", (req, res) => {
  res.json("Hello Get");
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
