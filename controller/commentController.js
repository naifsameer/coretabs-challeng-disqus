const CommentModel = require("../models/commentModel");

/** show comment
 *
 *
*/
exports.showComment = async (req, res) => {
  // const { postID } = req.body;
  const data = await CommentModel.showComments(/* postID */);
  // res.json(data);
  res.render("comment/comment", {
    data,
  });
};

/** add new commment
 *
 *
*/

exports.newComment = async (req, res) => {
  const { username, commentBody } = req.body;
  res.json(req.body);
  await CommentModel.newComment({ username, commentBody });
  // res.send("work");
};
