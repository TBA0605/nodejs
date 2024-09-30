const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getTestEjs,
  getTestNodemon,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/test-ejs", getTestEjs);
router.get("/test-nodemon", getTestNodemon);

module.exports = router;
