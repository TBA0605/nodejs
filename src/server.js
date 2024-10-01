require("dotenv").config(); //import env
const express = require("express"); //cu phap commomjs // import express
const app = express(); // gán framework express cho app để tạo 1 app express
const port = process.env.PORT || 8888; //init port //hardcode
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// const connection = require("./config/database");

//config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);
//khai báo route
app.use("/", webRoutes);

// connection.query("select * from Users u", function (err, results, fields) {
//   console.log(">>>results", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
