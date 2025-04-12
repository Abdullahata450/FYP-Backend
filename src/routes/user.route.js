import express from "express";
import { homePage, homePage1 ,getStockNews,getAllUser,getAlpacaAccount,getAlpacaStockPrice } from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/home1").get(homePage1);
router.route("/company-news").get(getStockNews);
router.route("/get-users").get(getAllUser); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-alpaca-account").post(getAlpacaAccount); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-alpaca-price").post(getAlpacaStockPrice); // This route is not defined in the controller, so it will not work as expected.
// router.route("/webhooks").post(getwebhook); // This route is not defined in the controller, so it will not work as expected.
export { router };  

