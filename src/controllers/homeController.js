const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
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

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); //userEdit <-- user
};

module.exports = {
  getHomePage,
  getTestEjs,
  getTestNodemon,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
