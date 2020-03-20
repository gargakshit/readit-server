const Parser = require("rss-parser");
const { SourceModel } = require("../../models/source");
const { getDescription } = require("../fetch/description");
const { fetchRss } = require("./fetchRss");

const parser = new Parser();

const addRssSource = url => {
  SourceModel.findOne({ feedUrl: url }, async (err, doc) => {
    if (err || !doc) {
      const feed = await parser.parseURL(url);
      const desc = await getDescription(url);

      const s = new SourceModel({
        feedUrl: url,
        title: feed.title,
        image: desc.logo
      });

      await s.save((err, source) => {
        if (!err) {
          fetchRss(url, source);
        }
      });
    }
  });
};

module.exports = { addRssSource };
