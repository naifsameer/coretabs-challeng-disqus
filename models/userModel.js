/* eslint-disable dot-notation */
const { ObjectID } = require("mongodb");
const bcrypt = require("bcrypt");
const DB = require("./index");

/** add new user
 * @param {body} req.body
 * @returns username, id , result
 */
exports.newUser = async (body) => {
  const collection = await DB("user");
  const { username, email, password } = body;

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await collection.insertOne({
    username,
    email,
    passowrd: hashPassword,
  });
  return {
    username: (user.ops[0].username),
    id: (user.ops[0]["_id"]),
    result: (user.result),
  };
};

/** login the user
 * @param {object} userData "email" and "password"
 * @returns {object} return object { ok: true, _id, username }
 * @returns {object} object {ok: false, msg: "wrong password"} or
 * {ok: false, msg: "wrong email"}
 */
exports.loginUser = async (userData) => {
  const collection = await DB("user");
  const { email, password } = userData;
  const user = await collection.findOne({ email });
  // if the user not exsits
  if (!user) return { ok: false, msg: "wrong email" };

  const checkPassword = await bcrypt.compare(password, user.passowrd);

  if (checkPassword) {
    return {
      username: (user.username),
      id: (user["_id"]),
      ok: true,
    };
  }
  // if the password wrong
  return { ok: false, msg: "wrong password" };
};

/** user profile section
 * @param {string} userId
 * @returns {object} return object {ok: true, username, email}
 * @returns {object} object {ok: false, msg: "user not found"}
 * if the user not found
 */
exports.showUser = async (id) => {
  const collection = await DB("user");
  const user = await collection.findOne({ _id: ObjectID(id) });
  // if the user not exsits
  if (user) {
    const { username, email } = user;
    return { ok: true, username, email };
  }
  // if the user not found
  return { ok: false, msg: "user not found" };
};
