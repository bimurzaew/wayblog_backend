const { Router } = require("express");
const { postsController } = require("../controllers/postController");
const { postCreateValidation } = require("../validations");
const { authMiddleware } = require("../utils/checkAuth");
const {handleValidationErrors} = require("../utils/validationErrors");

const router = Router();

router.get("/posts", postsController.getPosts);
router.get("/posts/:id", postsController.getPostById);
router.get("/tags", postsController.getLastTags)
router.post("/posts", authMiddleware, postCreateValidation, handleValidationErrors,postsController.addPost);
router.delete("/posts/:id", authMiddleware, postsController.removePost);
router.patch("/posts/:id", authMiddleware, handleValidationErrors,postsController.updatePost);

module.exports = router;
