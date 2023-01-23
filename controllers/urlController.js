import Url from "../models/url.model.js";
import { nanoid } from "nanoid";
import config from "../config/config.js";

export const createShortUrl = async (req, res, next) => {
   try {
      const { link } = req.body;
      const baseUrl = config.BASE_URL;

      const isValidUrl = (urlString) => {
         try {
            return Boolean(new URL(urlString));
         } catch (e) {
            return false;
         }
      };

      // Check base url
      if (!isValidUrl(link)) {
         return res.status(200).json({
            message: "Invalid URL",
            status: false,
         });
      }

      // Check long url
      // if (!link.isUri(longUrl)) {
      //   throw new Error("Invalid long url");
      // }

      //const time = Date.now().toString().slice(-3);
      //  const urlCode = `${name}-${time}`;
      const urlCode = nanoid(10);

      const shortUrl = baseUrl + "/forU/" + urlCode;
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
         urlCode: urlCode,
      });
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
      });
   }
};
