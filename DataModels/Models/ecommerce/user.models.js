import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
    },
    Address: {
      type: String,
    },
    userRole: {
      type: String,
      required: true,
      enum: {
        values: ["Wholesale", "Dropship", "Admin"],
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
