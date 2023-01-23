import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    releaseDate: { type: Date, default: Date.now, required: false },
  },
  { timestamps: true }
);

export const Game = mongoose.model("Game", GameSchema);
