import express from "express";
import testController from "../controllers/testController";
const router = express.Router();

/**
 * @route   POST /api/test
 * @desc    test
 * @access  Public
 */
router.route("/test").get(testController.test);
router.route("/test2").get(testController.test2);
router.route("/test3").get(testController.test3);

module.exports = router;
