import mongoose from "mongoose";

const transSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
      required: true,
    },
    borrowDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    returnDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["borrowed", "returned"],
      required: true,
    },
  },
  { timestamps: true },
);
export const transModel = mongoose.model("transaction", transSchema);
