const express = require("express");

const { getArticle } = require("../modules/fetch/article");
const api = require("../api");

const router = express.Router();

router.use("/api", api);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/article", async (req, res) => {
  const { url } = req.query;

  const article = await getArticle(url);

  if (article.error === 0) {
    res.render("article", {
      title: article.data.title,
      content: article.data.content,
      img: article.data.image
    });
  } else {
    res.status(500).send("Error Extracting Article!");
  }
});

module.exports = router;
