const router = require("express").Router();
const { NOT_FOUND_ERROR } = require("../utils/errors");
const auth = require("../middleware/auth");
const { createUser, login } = require("../controllers/users");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

router.post("/signup", createUser);
router.post("/signin", login);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: "Requested resource not found" });
});

module.exports = router;
