const express = require("express");
const { ArticleModel } = require("../../models/article");

const router = express.Router();

router.get("/", (req, res) => {
  const { feeds, from } = req.query;

  const query = {
    "source.feedUrl": {
      $in: feeds
    }
  };

  ArticleModel.find(
    from
      ? {
          ...query,
          _id: {
            $gt: from
          }
        }
      : query
  )
    .sort({ "metadata.date": 1 })
    .exec((err, docs) => {
      if (err) {
        res.status(500).json({
          error: 1,
          message: "Internal Database Error!"
        });
      } else {
        res.json(docs);
      }
    });
});

module.exports = router;
