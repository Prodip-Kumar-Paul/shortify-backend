import Url from "../models/url.model.js";
import { nanoid } from "nanoid";
import config from "../config/config.js"

export const createShortUrl = async (req, res, next) => {
   try {
      const { link } = req.body;
      //console.log(link);
      const baseUrl = config.BASE_URL;

      // Check base url
      // if (!link.isUri(baseUrl)) {
      //    res.status(401).json({
      //       message: "Invalid base url",
      //       data: [],
      //       status: false,
      //    });
      // }

      // Check long url
      // if (!link.isUri(longUrl)) {
      //   throw new Error("Invalid long url");
      // }


      //const time = Date.now().toString().slice(-3);
      //  const urlCode = `${name}-${time}`;
      const urlCode = nanoid();

      const shortUrl = baseUrl + "/forU?urlCode=" + urlCode;
      const newUrl = new Url({
         urlCode,
         longUrl: link,
         shortUrl,
         date: new Date(),
      });

      await newUrl.save();

      res.status(200).json({
         message: "short url created successfully!",
         data: newUrl,
         status: true,
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         status: false,
         message: "server error!",
      });
   }
};

export const getShortUrl = async (req, res, next) => {
   try {
      const { urlCode } = req.query;

      const foundUrl = await Url.findOne({
         urlCode: urlCode
      })
      res.status(200).json({
         message: "fetched successfully",
         data: foundUrl,
         status: true,
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         status: false,
         message: "server error!",
      })
   };
}
