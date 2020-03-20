const mongoose = require("mongoose");

const SourceSchema = new mongoose.Schema({
  feedUrl: String,
  title: String,
  image: String
});

const SourceModel = mongoose.model("SourceModel", SourceSchema);

module.exports = { SourceModel, SourceSchema };
