const Item = require("../models/clothingItem");

const getClothesItems = (req, res) => {
  Item.find({})
    .then((items) => res.send(items))
    .catch((err) => res.status(500).send(err));
};
const deleteClothesItem = (req, res) => {
  const { itemId } = req.params;
  Item.findByIdAndDelete(itemId)
    .then((item) => {
      if (!item) {
        return res
          .status(404)
          .send({ message: "Requested resource not found" });
      }
      return res.send(item);
    })
    .catch((err) => res.status(400).send(err));
};
const createClothesItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const ownerId = req.user?.id;
  Item.create({ name, weather, imageUrl, owner: ownerId })
    .then((item) => res.send(item))
    .catch((err) => res.status(400).send(err));
};

module.exports = { getClothesItems, deleteClothesItem, createClothesItem };
