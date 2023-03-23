require("dotenv").config();
const dbConnection = require("./config/db");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// ------> Middleware
app.use(cors());
app.use(express.json());

dbConnection();

// Routes

app.get("/", (req, res) => {
  res.send("Doctor's Portal is running");
});

app.listen(port, function () {
  console.log(`Doctor's Portal is running on ${port}`.yellow.bold);
  console.log("------------- x -------------");
});
