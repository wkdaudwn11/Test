import express from "express";
import testController from "../controllers/testController";
const router = express.Router();

router.route("/test").post(testController.test);
router.route("/test2").post(testController.test2);
router.route("/test3").post(testController.test3);

module.exports = router;
