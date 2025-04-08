import express from "express";
import { homePage, homePage1 ,companyNews,getAllUser } from "../controllers/userController.js"; // ✅ Add .js extension

const router = express.Router();

router.route("/").get(homePage);
router.route("/home1").get(homePage1);
router.route("/company-news").get(companyNews);
router.route("/get-users").get(getAllUser); // This route is not defined in the controller, so it will not work as expected.

export { router }; 
