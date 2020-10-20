const UserModel = require("../models/userModel");

// add new user
exports.newUser = async (req, res) => {
  const { body }  = req;
  const data = await UserModel.newUser(body);
  res.send(`add to DB ${data.ok > 0 ? "true" : "false"}`);
};
