const UserModel = require("../models/userModel");

// add new user
exports.newUser = async (req, res) => {
  const { body }  = req;
  const user = await UserModel.newUser(body);
  req.session.userId = user.id;
  res.json({ username: body.username, email: body.email, id: (user.id) });
  // res.render("user/profile.ejs", {
  //   user: {
  //     username: body.username,
  //     email: body.email,
  //   },
  // });
};

// login the user
exports.loginUser = async (req, res) => {
  const { body } = req;
  // const body = { email: "test@gmail.comm", password: "wrong password" };
  const user = await UserModel.loginUser(body);
  req.session.userId = user.id;
  res.json(user);
  console.log(`from userController ==> ${req.session.userID}`);
  // res.json({ msg: "this is massage from the server to the client" });
};
