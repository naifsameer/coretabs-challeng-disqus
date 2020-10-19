const UserModel = require("../models/userModel");

module.exports = {
  newUser(req, res) {
    const body = req.params;
    UserModel.newUser(body, res);
  },
};
