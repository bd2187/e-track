const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// connect to db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("conencted to db");
});

// Routes
const usersRoutes = require("./routes/users");
const exerciseRoutes = require("./routes/exercise");

app.use("/users", usersRoutes);
app.use("/exercises", exerciseRoutes);

app.listen(PORT, function() {
    console.log(`Server running on ${PORT}`);
});
