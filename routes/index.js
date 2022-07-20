const { Router } = require("express");

const router = Router();

router.use(require("./users.route"));
router.use(require("./posts.route"));
router.use(require("./upload.route"));

module.exports = router;
