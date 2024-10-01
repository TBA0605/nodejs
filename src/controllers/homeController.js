const connection = require("../config/database");

const getHomePage = (req, res) => {
  // let users = [];
  // connection.query("select * from Users u", function (err, results, fields) {
  //   users = results;
  //   console.log(">>>results home page = ", results); // results contains rows returned by server
  //   res.send(JSON.stringify(users));
  // });

  return res.render("home.ejs")
};

const getTestEjs = (req, res) => {
  res.render("sample.ejs");
};

const getTestNodemon = (req, res) => {
  res.send("hello world with nodemon");
};

module.exports = {
  getHomePage,
  getTestEjs,
  getTestNodemon,
};
