const router = require("express").Router();
const CommentController = require("../controller/commentController");

// show comments
router.get("/", CommentController.showComment);

// add comment
router.post("/new", CommentController.newComment);

module.exports = router;
