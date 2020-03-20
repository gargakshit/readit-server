const express = require("express");
const { getArticle } = require("../modules/fetch/article");

const router = express.Router();

router.get("/", async (req, res) => {
  const { url } = req.query;

  res.send(await getArticle(url));
});

module.exports = router;
