const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    console.log("I am a middle ware");
    next();
});
app.use(function (req, res, next) {
    console.log("I am second middleware");
    next();
});
app.use(function (req, res, next) {
    console.log("I am third middleware");
    next();
});

app.get("/", function (req, res) {
  res.send("Champ");
});

app.get("/pro", function (req, res) {
  res.send("Yes I am Pro Champion");
});

app.listen(3000);
