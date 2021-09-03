import express from "express";
const router = express.Router();
import { getYelpData } from "../controllers/YelpController.js";

router.route("/data").get(getYelpData);

export default router;
