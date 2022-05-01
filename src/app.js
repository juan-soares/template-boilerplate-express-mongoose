const express = require("express");
const app = express();
require('../config/mongo');
const routesPessoas = require("./routes/pessoas");

app.use(express.static("public"));

app.use("/pessoas", routesPessoas);

module.exports = app;
