import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GameSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    earlyAccess: {
      type: String,
      select: false,
      required: true,
    },
    releaseDate: { type: Date, default: Date.now, required: false },
  },
  { timestamps: true }
);

export const Game = mongoose.model("Game", GameSchema);
