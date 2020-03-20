const Parser = require("rss-parser");
const { SourceModel } = require("../../models/source");
const { ArticleModel } = require("../../models/article");
const { getDescription } = require("../fetch/description");
const { getArticle } = require("../fetch/article");
const { asyncForEach } = require("../../utils/asyncForEach");

const parser = new Parser();

const fetchAllRss = () => {
  SourceModel.find(async (err, docs) => {
    if (!err) {
      await asyncForEach(docs, async doc => {
        await fetchRss(doc.feedUrl, doc);
      });
    }
  });
};

const fetchRss = async (url, source) => {
  const feed = await parser.parseURL(url);

  await asyncForEach(feed.items, async ({ link }) => {
    ArticleModel.findOne(
      {
        url: link
      },
      async (err, d) => {
        if (err || d == null) {
          try {
            const article = await getArticle(link);

            if (article.error == 0) {
              const desc = await getDescription(link);

              if (desc != null) {
                const a = new ArticleModel();

                a.parsedArticle = article.data;
                a.metadata = desc;
                a.source = source;
                a.url = link;

                await a.save();
              }
            }
          } catch (e) {}
        }
      }
    );
  });
};

module.exports = { fetchAllRss, fetchRss };
