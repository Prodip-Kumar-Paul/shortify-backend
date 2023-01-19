import urlModel from "../models/url.model";

export const createShortUrl = async (req, res, next) => {
   try {
      const { link } = res.body;

      const baseUrl = configData.BASE_URL;

     // Check base url
     if (!validUrl.isUri(baseUrl)) {
        res.status(401).json({
           message: "Invalid base url",
           data: [],
           status: false,
        });
     }

     // Check long url
     // if (!validUrl.isUri(longUrl)) {
     //   throw new Error("Invalid long url");
     // }

      
   const time = Date.now().toString().slice(-3);
  //  const urlCode = `${name}-${time}`;
  // const urlCode=

   const shortUrl = baseUrl + "/forU/" + urlCode;
   url = new urlModel({
      urlCode,
      longUrl,
      shortUrl,
      date: new Date(),
   });

   await url.save();

   res.status(200).json({
      message: "short url created successfully!",
      data: url,
      status: true,
   });


      res.json({
         data: link,
         status: true,
         message: "Short Link created successfully!",
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         status: false,
         message: "server error!",
      });
   }
};

