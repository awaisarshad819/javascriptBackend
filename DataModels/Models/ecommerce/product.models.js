import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      required: true,
    },
    productSlug: {
      type: String,
      required: true,
      unique: true,
    },
    productDescription: {
      type: String,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productSalePrice: {
      type: Number,
    },
    productPurchasePrice: {
      type: Number,
    },
    productImageUrl: {
      type: String,
    },
    produtcSku: {
      type: String,
    },
    productStock: {
      type: Number,
      default: 0,
    },
    productCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    productWeight: {
      type: Number,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
