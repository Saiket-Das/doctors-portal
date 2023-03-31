const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/user.controllers");

router.route("/").get(usersControllers.getUsers);
router.route("/:email").put(usersControllers.createUser);

router.route("/admin/:email").get(usersControllers.getAdmin);

module.exports = router;
