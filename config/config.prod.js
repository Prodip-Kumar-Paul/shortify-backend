import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ENV = process.env.NODE_ENV || "prod";

const configProd = {
   //HOST: process.env.PROD_HOST,
   PORT: process.env.PROD_PORT,
   DB_NAME: process.env.PROD_DB_NAME,
   DB_URL: process.env.PROD_DB_URL,
   DB_PASSWORD: process.env.PROD_DB_PASSWORD,
   BASE_URL: process.env.PROD_BASE_URL,
};

export default configProd;
