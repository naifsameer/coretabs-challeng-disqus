const DB = require("./index");

/**
 * @param {body} req.body
 * @param {res} res object
 */
module.newUser = (body, res) => {
  const collection = DB("post");
  collection.then((data) => {
    data.find({}).toArray().then((d) => res.json(d));
  });
};
