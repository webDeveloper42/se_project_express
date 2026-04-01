const router = require("express").Router();
const { NOT_FOUND_ERROR } = require("../utils/errors");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: "Requested resource not found" });
});

module.exports = router;
