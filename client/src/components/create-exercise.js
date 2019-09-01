import React, { useState } from "react";

const CreateExercise = function() {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());

    const updateTextField = function(evt) {
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

    return (
        <form>
            <input
                data-type="username"
                type="text"
                onChange={updateTextField}
                value={username}
            />
        </form>
    );
};

export default CreateExercise;
