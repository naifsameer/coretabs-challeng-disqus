const express = require("express");
const router = express.Router();
const UserControler = require("../controller/userController");

// console.log(UserModel, "from user file ");
// console.log(UserModel.newUser("new data"));
/* GET users listing. */
router.get("/new", UserControler.newUser);
// router.post("/",(req, res) => {
//   req.params
// })
module.exports = router;
