const UserModel = require("../models/userModel");

// add new user
exports.newUser = async (req, res) => {
  const { body }  = req;
  await UserModel.newUser(body);
  res.render("user/profile.ejs", {
    user: {
      username: body.username,
      email: body.email,
    },
  });
};

// login the user
exports.loginUser = async (req, res) => {
  // const { body } = req;
  const body = { email: "test@gmail.com", password: "wrong password"}
  const data = await UserModel.loginUser(body);
  // console.log(data);
  res.json(data);
  // res.send("work");
};
