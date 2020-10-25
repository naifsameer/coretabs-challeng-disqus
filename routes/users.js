const express = require("express");
const router = express.Router();
const UserControler = require("../controller/userController");

// add new user
router.post("/new", UserControler.newUser);

// login the user
router.post("/login", UserControler.loginUser);

router.get("/q", (req, res) => {
  console.log(req.session.userId);
  res.json(req.session.userId);
});

router.get("/z", (req, res) => {
  req.session.destroy();
  res.json({ msg: "session delete it" });
});

module.exports = router;
