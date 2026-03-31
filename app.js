const express = require("express");
const app = express();
const { port = 3001 } = process.env;
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
