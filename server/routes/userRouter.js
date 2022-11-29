const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddlewere = require("../middleware/authMiddlewere");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddlewere, userController.chech);

module.exports = router;
