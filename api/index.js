const express = require("express");
const extractRoute = require("./extract");
const descriptionRoute = require("./description");

const router = express.Router();

router.use("/extract", extractRoute);
router.use("/description", descriptionRoute);

module.exports = router;
