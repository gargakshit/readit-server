const express = require("express");
const { addRssSource } = require("../../modules/rss/addRssSource");

const router = express.Router();

router.post("/", async (req, res) => {
  const { feedUrl } = req.body;

  if (feedUrl) {
    await addRssSource(feedUrl);

    res.json({
      error: 0,
      message: "OK"
    });
  } else {
    res.json({
      error: 2,
      message: "Please provide a feed URL!"
    });
  }
});

module.exports = router;
