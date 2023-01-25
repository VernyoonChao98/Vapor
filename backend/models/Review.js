import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    gameId: {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
    content: {
      type: String,
      required: true,
    },
    recommend: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", ReviewSchema);
