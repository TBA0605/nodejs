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

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> email: ", email, " name: ", name, " city: ", city);
  //send data to database
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  
  res.send("create user succeed!");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getTestEjs,
  getTestNodemon,
  postCreateUser,
  getCreatePage,
};
