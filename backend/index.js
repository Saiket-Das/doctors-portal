require("dotenv").config();
const dbConnection = require("./config/db");

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

const userRoutes = require("./routes/user.routes");
const serviceRoutes = require("./routes/service.routes");

// ------> Middleware
app.use(cors());
app.use(express.json());

dbConnection();

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/service", serviceRoutes);

app.get("/", (req, res) => {
  res.send("Doctor's Portal is running");
});

app.listen(port, function () {
  console.log(`Doctor's Portal is running on ${port}`.yellow.bold);
  console.log("------------- x -------------");
});
