const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise.model");
const generate_response = require("../utils/generate_response");

/**
 * Type: GET
 * Route: /exercises
 * Description: fetches all exercises
 */
router.route("/").get(function(req, res) {
    Exercise.find()
        .then(function(exercises) {
            return res.json(
                generate_response(
                    true,
                    "successfully fetched all exercises",
                    exercises
                )
            );
        })
        .catch(function(err) {
            return res
                .status(400)
                .json(
                    generate_response(false, "failed to fetch exercises", err)
                );
        });
});

/**
 * Type: POST
 * Route: /exercises/add
 * Description: Adds exercise to DB
 */
router.route("/add").post(function(req, res) {
    const { username, description, duration, date } = req.body;

    const new_exercise = new Exercise({
        username,
        description,
        duration: parseInt(duration),
        date: Date.parse(date)
    });

    new_exercise
        .save()
        .then(function() {
            return res.json(
                generate_response(true, "successfully saved new exercise")
            );
        })
        .catch(function(err) {
            return res
                .status(400)
                .json(generate_response(false, "failed to save exercise", err));
        });
});

router
    .route("/:id")

    /**
     * Type: GET
     * Route: /exercises/:id
     * Description: Fetches exercise from DB
     */
    .get(function(req, res) {
        const { id } = req.params;

        Exercise.findById(id)
            .then(function(exercise) {
                if (exercise) {
                    return res.json(
                        generate_response(
                            true,
                            "successfully fetched exercise",
                            exercise
                        )
                    );
                } else {
                    return res.json(
                        generate_response(false, "exercise not found", null)
                    );
                }
            })
            .catch(function(err) {
                return res
                    .status(400)
                    .json(
                        generate_response(
                            false,
                            "failed to fetch exercise",
                            err
                        )
                    );
            });
    })

    /**
     * Type: DELETE
     * Route: /exercises/:id
     * Description: Deletes an exercise from DB
     */
    .delete(function(req, res) {
        const { id } = req.params;

        Exercise.findByIdAndDelete(id)
            .then(function(exercise) {
                return res.json(
                    generate_response(
                        true,
                        "successfully deleted exercise",
                        exercise
                    )
                );
            })
            .catch(function(err) {
                return res
                    .status(400)
                    .json(
                        generate_response(
                            false,
                            "failed to delete exercise",
                            err
                        )
                    );
            });
    });

module.exports = router;
