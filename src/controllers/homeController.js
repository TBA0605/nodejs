const getHomePage = (req, res) => {
  res.send("Hello World!");
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
