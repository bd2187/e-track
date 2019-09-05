import React, { useState, useEffect } from "react";
import axios from "axios";

const ExerciseList = function() {
    const [exercises, setExercises] = useState([]);
    const delete_exercise = function(id) {
        axios.delete(`http://localhost:5000/exercises/${id}`).then(res => {
            const filtered_exercises = exercises.filter(
                item => item._id !== id
            );

            setExercises(filtered_exercises);
        });
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/exercises/")
            .then(res => {
                var exercises_arr = res.data.data;
                setExercises(exercises_arr);
            })
            .catch(err => {});
    }, []);
    return <p>ExerciseList</p>;
};

export default ExerciseList;
