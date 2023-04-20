import mongoose from "mongoose";
const { Schema } = mongoose;

const analyticsSchema = new Schema(
   {
      urlId: {
         type: Schema.Types.ObjectId,
         ref: "Url",
      },
      browser: [
         {
            type: String,
         },
      ],
      os: [
         {
            type: String,
         },
      ],
      platform: [
         {
            type: String,
         },
      ],
      ip: [
         {
            type: String,
         },
      ],
      country: [
         {
            type: String,
         },
      ],
      city: [
         {
            type: String,
         },
      ],
   },
   { timestamps: true }
);

module.exports = mongoose.model("Analytics", analyticsSchema);
