const express = require("express");
const PORT = process.env.port || 8080;
const app = express();
const ngrok = require('ngrok');
const url = ngrok.connect();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("home");
});

app.get('/newpost', (req, res) =>{
  res.redirect("/newpost");
});

app.listen(PORT, ()=>{
  console.log(`${PORT} is the magic port`);
});