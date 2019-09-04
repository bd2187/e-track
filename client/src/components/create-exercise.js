import React, { useState, useEffect } from "react";

const CreateExercise = function() {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(function() {
        setUsers(["user1", "me", "user3"]);
        setUsername("me");
    }, []);

    const updateFormField = function(evt) {
        const field = evt.target.getAttribute("data-type");
        const value = evt.target.value;

        switch (field) {
            case "username":
                setUsername(value);
                break;

            case "description":
                setDescription(value);
                break;

            case "duration":
                setDuration(value);
                break;

            default:
        }
    };

    const onSubmit = function(evt) {
        evt.preventDefault();

        const exercise = {
            username,
            description,
            duration,
            date
        };

        window.location = "/";
    };

    return (
        <div>
            <h3>create new e log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>username: </label>
                    <select
                        className="form-control"
                        value={username}
                        onChange={updateFormField}
                        data-type="username"
                    >
                        {users.map(function(user) {
                            return (
                                <option key={user} value={user}>
                                    {user}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>duration (in minutes):</label>
                    <input
                        className="form-control"
                        type="number"
                        value={duration}
                        onChange={updateFormField}
                        data-type="duration"
                        min="0"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateExercise;
