require("dotenv");

const { bootstrapHttp } = require("./bootstrap/http");
// const { bootstrapCron } = require("./bootstrap/cron");
// const { bootstrapDatabase } = require("./bootstrap/database");

// bootstrapDatabase();
bootstrapHttp();
// bootstrapCron();
