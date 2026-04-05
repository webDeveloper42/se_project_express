const router = require("express").Router();
const NotFoundError = require("../errors/NotFoundError");
const auth = require("../middleware/auth");
const { createUser, login } = require("../controllers/users");
const { getClothesItems } = require("../controllers/clothingItems");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const { validateUser, validateLogin } = require("../middleware/validation");

router.post("/signup", validateUser, createUser);
router.post("/signin", validateLogin, login);
router.get("/items", getClothesItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItemRouter);

router.use((_req, _res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
