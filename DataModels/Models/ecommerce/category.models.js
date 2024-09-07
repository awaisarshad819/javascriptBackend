import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryTitle: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    productCount: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
