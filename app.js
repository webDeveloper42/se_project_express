const express = require("express");
const mongoose = require("mongoose");
const { NOT_FOUND_ERROR } = require("./utils/errors");
const { getUsers, getUser, createUser } = require("./controllers/users");
const {
  getClothesItems,
  createClothesItem,
  deleteClothesItem,
  likeClothesItem,
  dislikeClothesItem,
} = require("./controllers/clothingItems");

const id = "69cc5fea4dc31b627815b777";

const app = express();
const { port = 3001 } = process.env;

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: id, // paste the _id of the test user created in the previous step
  };
  next();
});

app.get(`/users`, getUsers);
app.get(`/users/:userId`, getUser);
app.post("/users", createUser);

app.get(`/items`, getClothesItems);
app.post("/items", createClothesItem);
app.delete(`/items/:itemId`, deleteClothesItem);
app.put(`/items/:itemId/likes`, likeClothesItem);
app.delete(`/items/:itemId/likes`, dislikeClothesItem);

app.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: "Requested resource not found" });
});

app.listen(port);
