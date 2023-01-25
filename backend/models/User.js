import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    hashedPassword: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
