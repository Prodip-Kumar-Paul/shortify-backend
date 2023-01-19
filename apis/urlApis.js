import express from "express";
import { createShortUrl, getShortUrl } from "../controllers/urlController.js";
const router = express.Router();

//test api
router.post("/createShortUrl", createShortUrl);

router.get('/getShortUrl', getShortUrl);

export default router;
