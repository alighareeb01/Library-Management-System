import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    availableCopies: {
      type: Number,

      default: 1,
    },
  },
  { timestamps: true },
);
export const bookModel = mongoose.model("books", bookSchema);
