require("dotenv").config(); //import env
const express = require("express"); //cu phap commomjs // import express
const path = require("path"); //thư viện có sẵn trong nodejs nên không cần cài, dùng để sài được path.join(__dirname, "views")
const app = express(); // gán framework express cho app để tạo 1 app express
const port = process.env.PORT || 8888; //init port //hardcode
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require('./routes/web');

//config template engine
configViewEngine(app);
//khai báo route
app.use('/',webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
