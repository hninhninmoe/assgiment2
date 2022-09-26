const express = require("express");
const app = express();

app.get("/index", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/hnin", function (req, res) {
  res.sendFile(__dirname + "/html.html");
});

app.listen(3000, () => {
  console.log("Server starting up at : port: 3000");
});
