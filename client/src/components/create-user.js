import React, { useState } from "react";

const CreateUser = function() {
    const [username, setUsername] = useState("");

    const onUsernameChange = function(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setUsername(value);
    };

    const onUsernameSubmit = function() {
        setUsername("");
    };
    return <p>CreateUser</p>;
};

export default CreateUser;
