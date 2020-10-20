const { MongoClient } = require("mongodb");
const Settings = require("../settings");

const client = new MongoClient(Settings.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Connect to the DB
* @param collection you want to use
* @returns promise
* @example const collection = await DB("post");
  const data = await collection.insertOne({ d: "value" });
})
*/
const DB = function (collection) {
  return new Promise((resolve) => {
    client.connect((err) => {
      if (err) throw Error(err);
      // connect to db
      const db = client.db("disqus");
      // return the collection
      resolve(db.collection(collection));
    });
  });
};

module.exports = DB;
