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
      select: false,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
