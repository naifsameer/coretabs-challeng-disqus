const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const commentRouter = require("./comment");
// home page || comment page
router.use("/", commentRouter);

/* GET user page. */
router.use("/user", userRouter);

module.exports = router;
