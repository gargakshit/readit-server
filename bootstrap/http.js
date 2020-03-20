const express = require("express");
const bodyParser = require("body-parser");

const routes = require("../routes");

const bootstrapHttp = () => {
  const app = express();

  app.use(bodyParser.json());

  app.set("view engine", "ejs");
  app.use("/static", express.static("static"));

  app.use("/", routes);

  app.listen(3000, () => {
    console.log("HTTP Bootstrap success!");
  });
};

module.exports = { bootstrapHttp };
