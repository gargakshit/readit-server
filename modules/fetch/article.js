const { extract } = require("article-parser");

const redis = require("../../utils/redis");

const getArticle = async url => {
  const cacheKey = Buffer.from(url).toString("base64");

  const cachedData = await redis.get(`readit:cache:0:${cacheKey}`);

  if (cachedData === null) {
    try {
      const data = await extract(url);

      if (data == null) {
        return {
          error: 1,
          message: `Failed to extract "${url}"`
        };
      } else {
        const returningData = {
          error: 0,
          message: `Extracted article from "${url}"`,
          data
        };

        await redis.set(
          `readit:cache:0:${cacheKey}`,
          JSON.stringify(returningData)
        );

        return returningData;
      }
    } catch (e) {
      return {
        error: 2,
        message: `Failed to extract "${url}"`
      };
    }
  } else {
    return JSON.parse(cachedData);
  }
};

module.exports = { getArticle };
