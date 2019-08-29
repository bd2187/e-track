const express = require("express");
const router = express.Router;
const User = require("../models/user.model");

router.route("/").get(function(req, res) {});

router.route("/add").post(function(req, res) {});

module.exports = router;
