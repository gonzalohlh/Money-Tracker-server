const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const User = require("./model/User");

const app = express();

dotenv.config();

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Money Tracker API",
  });
});

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
