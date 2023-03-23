const mongoose = require("mongoose");
const colors = require("colors");

const dbConnection = async () => {
  try {
    // const connect = await new mongoose.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    const connect = mongoose.connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bu6rg.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );

    console.log("MongoDB Connected".cyan.underline);
    console.log("------------- x -------------");
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = dbConnection;
