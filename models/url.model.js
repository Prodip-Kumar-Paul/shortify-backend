const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    
    urlCode: { type: String, default: null },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, default: null },
    date: { type: String, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Url", urlSchema);
