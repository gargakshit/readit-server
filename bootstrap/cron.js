const { CronJob } = require("cron");
const { fetchAllRss } = require("../modules/rss/fetchRss");

const refreshRSSJob = new CronJob(
  "*/30 * * * *",
  () => {
    fetchAllRss();
  },
  null,
  true,
  "Asia/Kolkata"
);

const bootstrapCron = () => {
  refreshRSSJob.start();

  console.log("Cron Bootstrap success!");
};

module.exports = { bootstrapCron };
