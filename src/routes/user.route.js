import express from "express";
import { homePage, homePage1 ,companyNews } from "../controllers/userController.js"; // ✅ Add .js extension

const router = express.Router();

router.route("/").get(homePage);
router.route("/home1").get(homePage1);
router.route("/company-news").get(companyNews);


export { router }; // ✅ Named export

