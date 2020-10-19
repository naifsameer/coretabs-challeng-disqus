const { MongoClient } = require("mongodb");
const Settings = require("../settings");

const client = new MongoClient(Settings.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * Connect to the DB
* @param collection of the DB
* @returns promise
* @example collection.then((data) => {
  data.find({}).then((result) => console.log(result))
})
*/
const DB = function superDB(collection) {
  return new Promise((resolve) => {
    client.connect((err) => {
      if (err) throw Error(err);
      const db = client.db("disqus");
      // db.collection(collection).find({}).toArray().then((data) => console.log(data));
      resolve(db.collection(collection));
    });
  });
};

module.exports = DB;
