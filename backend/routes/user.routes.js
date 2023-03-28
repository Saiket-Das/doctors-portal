const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/user.controllers");

router.route("/").get(usersControllers.getUsers);

module.exports = router;
