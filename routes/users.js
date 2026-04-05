const router = require("express").Router();
const { getCurrentUser, updateCurrentUser } = require("../controllers/users");
const { validateCurrentUser } = require("../middleware/validation");

router.get("/me", getCurrentUser);
router.patch("/me", validateCurrentUser, updateCurrentUser);

module.exports = router;
