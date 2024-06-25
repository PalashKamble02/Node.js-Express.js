const express = require("express");
const reqFilter=require("./middleware")
const route = express.Router();
const app = express();


route.use(reqFilter);

//this apply to all
app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to User Page");
});

//this is now apply to specific routes  where we used reqFilter

app.get("/help",reqFilter, (req, res) => {
    res.send("Welcome to User Page");
  });
  app.get("/about", (req, res) => {
    res.send("Welcome to User Page");
  });
    

  //this is apply where we used instance route
  app.get("/contact", (req, res) => {
    res.send("Welcome to User Page");
  });
  route.get("/more", (req, res) => {
    res.send("Welcome to User Page");
  });
    
app.use('/',route); 
app.listen(5000);
