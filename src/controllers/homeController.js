const connection = require("../config/database");

const getHomePage = (req, res) => {
  // let users = [];
  // connection.query("select * from Users u", function (err, results, fields) {
  //   users = results;
  //   console.log(">>>results home page = ", results); // results contains rows returned by server
  //   res.send(JSON.stringify(users));
  // });

  return res.render("home.ejs");
};

const getTestEjs = (req, res) => {
  res.render("sample.ejs");
};

const getTestNodemon = (req, res) => {
  res.send("hello world with nodemon");
};

const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> email: ", email, " name: ", name, " city: ", city);
  //send data to databa
  connection.query(
    `INSERT INTO
    Users (email, name, city)
    VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("created user succeed!")
    }
  );
};

module.exports = {
  getHomePage,
  getTestEjs,
  getTestNodemon,
  postCreateUser,
};
