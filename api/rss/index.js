const express = require("express");
const getRssRoute = require("./getRss");
const getSourcesRoute = require("./getSources");
const addRssRoute = require("./addRss");

const router = express.Router();

router.use("/getRss", getRssRoute);
router.use("/getSources", getSourcesRoute);
router.use("/addRssSource", addRssRoute);

module.exports = router;
