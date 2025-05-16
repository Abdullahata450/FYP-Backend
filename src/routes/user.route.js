import express from "express";
import { homePage, homePage1 ,getStockNews,getAllUser,getAlpacaAccount,getAlpacaStockPrice,PlaceOrder,getAllOrders,getStockPosition,getStockData } from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(homePage);
router.route("/home1").get(homePage1);
router.route("/company-news").get(getStockNews);
router.route("/get-users").get(getAllUser); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-alpaca-account").post(getAlpacaAccount); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-alpaca-price").post(getAlpacaStockPrice); // This route is not defined in the controller, so it will not work as expected.
router.route("/place-order").post(PlaceOrder); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-allOrders").post(getAllOrders); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-stockPosition").post(getStockPosition); // This route is not defined in the controller, so it will not work as expected.
router.route("/get-stockData").post(getStockData); // This route is not defined in the controller, so it will not work as expected.
// router.route("/webhooks").post(getwebhook); // This route is not defined in the controller, so it will not work as expected.
export { router };  

