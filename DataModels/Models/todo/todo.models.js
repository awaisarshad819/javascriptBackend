import mongoose from "mongoose";
import User from "./user.models";

const toDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", toDoSchema);
