const express = require("express");
require("../config/mongo");
const bodyParser = require("body-parser");
const routesPessoas = require("./routes/pessoas");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/pessoas", routesPessoas);

module.exports = app;
