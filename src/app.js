const express = require("express");
require("../config/mongo");
const bodyParser = require("body-parser");
const cors = require("cors");
const routesPessoas = require("./routes/pessoas");

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.use("/pessoas", routesPessoas);

module.exports = app;
