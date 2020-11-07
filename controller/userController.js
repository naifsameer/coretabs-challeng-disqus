const UserModel = require("../models/userModel");

// add new user
exports.newUser = async (req, res) => {
  const { body } = req;
  const user = await UserModel.newUser(body);
  req.session.userId = user.id;
  res.json(user);
};

// login the user
exports.loginUser = async (req, res) => {
  const { body } = req;
  const user = await UserModel.loginUser(body);
  // send user data to the client
  res.json(user);
  // add the user id to the session
  req.session.userId = user.id;
};

/** show the user
 *
 *
 */
exports.showUser = async (req, res) => {
  // const { id } = req.body;
  const id = "5f957c345eac6314c0b00b68";
  const user = await UserModel.showUser(id);
  res.json(user);
};
