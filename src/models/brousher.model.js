import mongoose, { Schema } from "mongoose";

const brousherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    brousherid: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Brousher = mongoose.model("Brousher", brousherSchema);
