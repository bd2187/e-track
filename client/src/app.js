import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

const App = function() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Route exact path="/" component={ExerciseList} />
                <Route path="/edit/:id" component={EditExercise} />
                <Route path="/create" component={CreateExercise} />
                <Route path="/user" component={CreateUser} />
            </div>
        </Router>
    );
};

render(<App />, document.getElementById("root"));
