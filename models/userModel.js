const DB = require("./index");

/**
 * add new user
 * @param {body} req.body
 * @returns result
 */
exports.newUser = async (body) => {
  const collection = await DB("user");
  const data = await collection.insertOne({ ...body });
  return (data.result);
};
