const express = require("express");
const redis = require("../utils/redis");

const router = express.Router();

router.get("/", async (req, res) => {
  const key = req.headers.apikey;

  const data = JSON.parse(await redis.get(`readit:apiKeys:${key}`));
  const requests = Number(await redis.get(`readit:keyStats:${key}`));

  delete data.apiSecret;

  res.send({
    data,
    noOfRequests: requests
  });
});

module.exports = router;
