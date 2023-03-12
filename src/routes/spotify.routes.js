//import 
const express = require('express');
const spotifyController = require('../controllers/spotify.controllers');
const router = express.Router();
var db = require('../db');
//request method
router.get('',spotifyController.index);
router.get('/test',spotifyController.test);


//export
module.exports = router