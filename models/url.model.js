import mongoose from "mongoose";
const { Schema } = mongoose;

const urlSchema = new Schema(
   {
      urlCode: { type: String, required: true, unique: true },
      longUrl: { type: String, required: true },
      shortUrl: { type: String, default: null },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
      count: { type: Number, default: 0 },
   },
   { timestamps: true }
);

export default mongoose.model("Url", urlSchema);
