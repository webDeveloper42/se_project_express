const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");

const app = express();
const { port = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
app.use(express.json());

app.use((req, res, next) => {
  req.user = { _id: "5d8b8592978f8bd833ca8133" };
  next();
});

app.use(cors());
app.use(router);

if (require.main === module) {
  app.listen(port);
}

module.exports = app;
