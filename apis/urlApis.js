import express from "express";
import { createShortUrl } from "../controllers/urlController";
const router = express.Router();

//test api
router.get("/create", createShortUrl);

export default router;
