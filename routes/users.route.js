const { Router } = require("express");
const { registerValidation, loginValidation } = require("../validations");
const { usersController } = require("../controllers/usersController.js");
const { authMiddleware } = require("../utils/checkAuth");
const { handleValidationErrors} = require("../utils/validationErrors");

const router = Router();

router.post("/auth/register", registerValidation, handleValidationErrors, usersController.registerUser);
router.post("/auth/login", loginValidation, handleValidationErrors, usersController.logIn);
router.get("/auth/getMe", authMiddleware, usersController.userInfo);

module.exports = router;
