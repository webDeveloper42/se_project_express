const router = require("express").Router();
const {
  createClothesItem,
  deleteClothesItem,
  likeClothesItem,
  dislikeClothesItem,
} = require("../controllers/clothingItems");

router.post("/", createClothesItem);
router.delete("/:itemId", deleteClothesItem);
router.put("/:itemId/likes", likeClothesItem);
router.delete("/:itemId/likes", dislikeClothesItem);

module.exports = router;
