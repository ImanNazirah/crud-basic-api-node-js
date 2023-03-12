//================== Import
var app = require("express")();
const express = require('express');

const router = express.Router();


var bodyParser = require("body-parser"); 
const port = 3000;
// =====================  listen port  
app.listen(port, () => {
  // console.info(`Example app listening on port ${port}`)
})

//route = controller file
var spotifyRouter = require('./routes/spotify.routes');

//Set view engine to ejs
app.set("view engine", "ejs"); 

//Tell Express where we keep our index.ejs
app.set("views", __dirname + "/views"); 

//Use body-parser
app.use(bodyParser.urlencoded({ extended: false })); 

// ===================== List of Route
app.use('/spotify', spotifyRouter);
