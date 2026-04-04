const router = require("express").Router();
const {
  createClothesItem,
  deleteClothesItem,
  likeClothesItem,
  dislikeClothesItem,
} = require("../controllers/clothingItems");
const { validateClothingItem, validateId } = require("../middleware/validation");

router.post("/", validateClothingItem, createClothesItem);
router.delete("/:itemId", validateId, deleteClothesItem);
router.put("/:itemId/likes", validateId, likeClothesItem);
router.delete("/:itemId/likes", validateId, dislikeClothesItem);

module.exports = router;
