const express = require("express");
const { getDescription } = require("../modules/fetch/description");

const router = express.Router();

router.get("/", async (req, res) => {
  const { url } = req.query;

  res.send(await getDescription(url));
});

module.exports = router;
