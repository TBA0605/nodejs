require("dotenv").config(); //import env
const express = require("express"); //cu phap commomjs // import express
const app = express(); // gán framework express cho app để tạo 1 app express
const port = process.env.PORT || 8888; //init port //hardcode
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require('mysql2');

//config template engine
configViewEngine(app);
//khai báo route
app.use("/", webRoutes);

//test connection
//create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, //default 3306
  user: 'root',
  password: '123456', //default empty
  database: 'TBA'
});

connection.query('select * from Users u', function (err, results, fields) {
  console.log(">>>results", results); // results contains rows returned by server
  console.log(">>>fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
