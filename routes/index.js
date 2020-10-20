const express = require("express");
const router = express.Router();
const userRouter = require("./users");
/* GET home page. */
router.use("/user", userRouter);

// sing up page
router.get("/signup", (req, res) => {
  res.render("signup");
});
module.exports = router;
