// const bcrypt = require("bcrypt");
const DB = require("./index");
// hash the password TODO use bcrypt its better than this way
const crypto = require("crypto");
const secret = "3$gkjgkj";
/**
 * add new user
 * @param {body} req.body
 * @returns result
 */
exports.newUser = async (body) => {
  const collection = await DB("user");
  const { username, email, password } = body;
  const passwordHash = crypto
    .createHmac("sha256", secret)
    .update(password)
    .digest("hex");
  // TODO crypt password here
  // await bcrypt.hash(password, 10, (err, hash) => {
  //   passwordHash = hash;
  // });
  const data = await collection.insertOne({ username, email, passwordHash });
  return data.result;
};

/** login the user
 * @param {object} userData "email" and "password"
 *
 *
 */
exports.loginUser = async (userData) => {
  const collection = await DB("user");
  // eslint-disable-next-line no-unused-vars
  const { email, password } = userData;

  /** check password
   * @param {string} inputPassword the password from the req.body
   * @param {string} userPassword password in the database
   * @returns {boolean} True || Fasle
  */
  const checkPassword = (inputPassword, userPassword) => {
    const passwordHash = crypto
      .createHmac("sha256", secret)
      .update(inputPassword)
      .digest("hex");
    return (passwordHash === userPassword);
  };
  const data = await collection.findOne({ email });
  console.log(data.password);
};
