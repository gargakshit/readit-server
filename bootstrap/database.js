const mongoose = require("mongoose");

const bootstrapDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Database bootstrap success!");
  } catch (e) {
    console.log("Database bootstrap unsuccessful!");
    throw e;
  }
};

module.exports = { bootstrapDatabase };
