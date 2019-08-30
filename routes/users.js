const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const generate_response = require("../utils/generate_response");

// create get request to fetch all users
router.route("/").get(function(req, res) {
    User.find()
        .then(function(all_users) {
            return res.json(
                generate_response(
                    true,
                    "successfull fetched all users",
                    all_users
                )
            );
        })
        .catch(function(err) {
            return res
                .status(400)
                .json(
                    generate_response(false, "failed to fetch all users", err)
                );
        });
});

// create post request to add all users
router.route("/add").post(function(req, res) {
    const username = req.body.username;

    const new_user = new User({ username });
    new_user
        .save()
        .then(function() {
            return res.json(
                generate_response(true, `successfully saved ${username}`)
            );
        })
        .catch(function(err) {
            return res
                .status(400)
                .json(generate_response(false, `failed to saved ${username}`));
        });
});

module.exports = router;
