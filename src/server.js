const express = require("express"); //cu phap commomjs // import express
const path = require("path"); //thư viện có sẵn trong nodejs nên không cần cài, dùng để sài được path.join(__dirname, "views")
const app = express(); // gán framework express cho app để tạo 1 app express
require("dotenv").config(); //import env

const port = process.env.PORT || 8888; //init port //hardcode
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//config static file
app.use(express.static(path.join(__dirname, "public")));

//khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

app.get("/test-nodemon", (req, res) => {
  res.send("hello world with nodemon");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
