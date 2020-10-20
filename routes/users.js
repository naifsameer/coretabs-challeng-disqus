const express = require("express");
const router = express.Router();
const UserControler = require("../controller/userController");
// console.log(UserControler.newUser(),'l')
// UserControler.log()
// console.log(UserControler.newUser("", ""));
// console.log(UserModel, "from user file ");
// console.log(UserModel.newUser("new data"));
/* GET users listing. */

// add new user
router.post("/new", UserControler.newUser);
// router.post("/", (req, res) => {
//   req.params
// })
module.exports = router;
