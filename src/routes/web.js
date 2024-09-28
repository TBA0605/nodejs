const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

router.get("/test-nodemon", (req, res) => {
  res.send("hello world with nodemon");
});

module.exports = router;
