const express = require("express");
const mongoose = require("mongoose");
const { getUsers, getUser, createUser } = require("./controllers/users");
const {
  getClothesItems,
  createClothesItem,
  deleteClothesItem,
} = require("./controllers/clothingItems");

const app = express();
const { port = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
app.use(express.json());

app.get(`/users`, getUsers);
app.get(`/users/:userId`, getUser);
app.post("/users", createUser);

app.get(`/items`, getClothesItems);
app.post("/items", createClothesItem);
app.delete(`/items/:itemId`, deleteClothesItem);

app.listen(port);
