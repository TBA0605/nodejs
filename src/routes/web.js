const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getTestEjs,
  getTestNodemon,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/test-ejs", getTestEjs);
router.get("/test-nodemon", getTestNodemon);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.get("/update/:id", getUpdatePage)

module.exports = router;
