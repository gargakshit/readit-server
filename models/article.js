const mongoose = require("mongoose");

const { SourceSchema } = require("./source");

const ArticleSchema = new mongoose.Schema({
  parsedArticle: {
    url: String,
    title: String,
    description: String,
    links: [String],
    image: String,
    content: String,
    author: String,
    source: String,
    published: String,
    ttr: Number
  },
  metadata: {
    author: String,
    date: String,
    description: String,
    image: String,
    logo: String,
    publisher: String,
    title: String,
    url: String
  },
  source: SourceSchema,
  url: String
});

const ArticleModel = mongoose.model("ArticleModel", ArticleSchema);

module.exports = { ArticleModel };
