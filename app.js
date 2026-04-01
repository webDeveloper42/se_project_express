const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const { createUser } = require("./controllers/users");

const app = express();
const { port = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
app.use(express.json());
app.use((req, res, next) => {
  // Use an explicit header when tests set the user, fallback to local default.
  const userIdFromHeader = req.header("x-user-id");
  req.user = {
    _id: userIdFromHeader || "69cc5fea4dc31b627815b777",
  };
  next();
});

app.use(router);

if (require.main === module) {
  app.listen(port);
}

module.exports = app;
