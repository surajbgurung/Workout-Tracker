const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
var path = require("path");

// const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});


app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});