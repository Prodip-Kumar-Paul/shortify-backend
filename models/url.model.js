import mongoose from "mongoose";
const { Schema } = mongoose;

const urlSchema = new Schema(
  {

    urlCode: { type: String, required: true, unique: true },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, default: null },
    date: { type: String, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Url", urlSchema);
