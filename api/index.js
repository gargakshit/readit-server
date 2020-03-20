const express = require("express");
const extractRoute = require("./extract");
const descriptionRoute = require("./description");
const statsRoute = require("./keyStats");
const rssRoute = require("./rss");

const router = express.Router();

router.use("/extract", extractRoute);
router.use("/description", descriptionRoute);
router.use("/keyStats", statsRoute);
router.use("/rss", rssRoute);

module.exports = router;
