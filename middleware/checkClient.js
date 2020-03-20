const redis = require("../utils/redis");

const checkClient = async (req, res, next) => {
  const { apikey, apisecret } = req.headers;

  if (!apikey || !apisecret) {
    res.status(401).json({
      error: 1,
      message: "Unauthenticated Request!"
    });
  } else {
    const data = await redis.get(`readit:apiKeys:${apikey}`);

    if (data === null) {
      res.status(401).json({
        error: 1,
        message: "Unauthenticated Request!"
      });
    } else {
      const { apiSecret } = JSON.parse(data);

      if (apiSecret !== apisecret) {
        res.status(401).json({
          error: 1,
          message: "Unauthenticated Request!"
        });
      } else {
        redis.incr(`readit:keyStats:${apikey}`);
        next();
      }
    }
  }
};

module.exports = { checkClient };
