const express = require("express");
const router = express.Router();
const UserControler = require("../controller/userController");

// add new user
router.post("/new", UserControler.newUser);

// login the user
router.get("/login", UserControler.loginUser);
module.exports = router;
