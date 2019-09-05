import React, { useState } from "react";

const CreateUser = function() {
    const [username, setUsername] = useState("");

    const onUsernameChange = function(evt) {
        const value = evt.target.value;
        setUsername(value);
    };

    const onUsernameSubmit = function(evt) {
        evt.preventDefault();
        setUsername("");
    };

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onUsernameSubmit}>
                <div className="form-group">
                    <label>username:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={onUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="create user"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
