// eslint-disable-next-line no-unused-vars
const ObjectId = require("mongodb").ObjectID;
const DB = require("./index");

/** Show comments
 *
 *
 */
exports.showComments = async (/* postID */) => {
  const collection = await DB("comment");
  const data = await collection.find({ /* _id: ObjectId(postID) */ }).toArray();
  return data;
};

/** add new comment
 *
 *
*/
exports.newComment = async ({ username, date = Date.now(), commentBody }) => {
  const collection = await DB("comment");
  // console.log(username, date, commentBody);
  await collection.insertOne({ username, date, commentBody });
};
