const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const commentRouter = require("./comment");
// home page || comment page
router.use("/", commentRouter);

/* GET user page. */
router.use("/user", userRouter);

// sing up page
router.get("/signup", (req, res) => {
  res.render("signup");
});
module.exports = router;
