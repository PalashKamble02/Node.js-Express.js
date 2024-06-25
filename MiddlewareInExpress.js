const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("Sorry you are not allowed");
  } else {
    next();
  }
};
app.get("/",reqFilter, (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users",reqFilter, (req, res) => {
  res.send("Welcome to User Page");
});

app.listen(5000);
