const router = require("express").Router();
const {
  getClothesItems,
  createClothesItem,
  deleteClothesItem,
  likeClothesItem,
  dislikeClothesItem,
} = require("../controllers/clothingItems");

router.get("/", getClothesItems);
router.post("/", createClothesItem);
router.delete("/:itemId", deleteClothesItem);
router.put("/:itemId/likes", likeClothesItem);
router.delete("/:itemId/likes", dislikeClothesItem);

module.exports = router;
