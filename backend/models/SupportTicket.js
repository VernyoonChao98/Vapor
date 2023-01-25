import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SupportTicketSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    issue: { type: String, required: true },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SupportTicket = mongoose.model("SupportTicket", ReviewSchema);
