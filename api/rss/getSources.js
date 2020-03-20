const express = require("express");
const { SourceModel } = require("../../models/source");

const router = express.Router();

router.get("/", (req, res) => {
  const { feedUrl } = req.query;

  if (feedUrl) {
    SourceModel.findOne({ feedUrl }, (err, docs) => {
      if (err) {
        res.status(500).json({
          error: 1,
          message: "Internal Database Error!"
        });
      } else {
        res.json(docs);
      }
    });
  } else {
    SourceModel.find((err, docs) => {
      if (err) {
        res.status(500).json({
          error: 1,
          message: "Internal Database Error!"
        });
      } else {
        res.json(docs);
      }
    });
  }
});

module.exports = router;
