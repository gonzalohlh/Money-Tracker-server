const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const User = require("./model/User");

const app = express();

app.get("/", async (req, res) => {
  try {
    const usersApi = await User.find();
    res.json({
      status: "success",
      data: usersApi,
    });
  } catch (error) {
    console.log(error);
  }
});

dotenv.config();

dbConnect();

app.use(express.json());

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
