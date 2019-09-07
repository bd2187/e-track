import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = function(props) {
    const { username, description, duration, date } = props.exercise;
    return (
        <tr>
            <td>{username}</td>
            <td>{description}</td>
            <td>{duration}</td>
            <td>{date.substring(0, 10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`}>edit</Link> |{" "}
                <button
                    style={{
                        background: "none",
                        border: "none",
                        padding: "0",
                        color: "#007bff"
                    }}
                    onClick={() => props.delete_exercise(props.exercise._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

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

    const render_exercise_list = function() {
        return exercises.map(function(exercise) {
            return (
                <Exercise
                    exercise={exercise}
                    delete_exercise={delete_exercise}
                    key={exercise._id}
                />
            );
        });
    };
    return (
        <div>
            <h3>logged exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>username</th>
                        <th>description</th>
                        <th>duration</th>
                        <th>date</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>{render_exercise_list()}</tbody>
            </table>
        </div>
    );
};

export default ExerciseList;
