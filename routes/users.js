const router = require("express").Router();
const {
  getUsers,
  getCurrentUser,
  createUser,
  updateCurrentUser,
} = require("../controllers/users");

router.get("/", getUsers);
router.get("/:userId", getCurrentUser);
router.post("/", createUser);
router.patch("/me", updateCurrentUser);

module.exports = router;
