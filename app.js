const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
    res.end("e-track");
});

app.listen(port, function() {
    console.log(`now listening to port ${port}`);
});
