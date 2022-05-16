//import 
const express = require('express');
const spotifyController = require('../controllers/spotify.controllers');
const router = express.Router();
var db = require('../db');
//request method
router.get('',spotifyController.index);
router.get('/test',spotifyController.test);

// router.get('/test', function(req, res, next) {

//     var query = 'select * from spotify_song';
//     db.query(query, function(err, rows, fields) {
//           console.log('checking err :::',err);
  
//       if (err) throw err;
      
//       console.log('checking rows :::',rows);
//       /*If you are creating api then get response in json format*/
//       //res.json(rows);
  
//       /*If you want response as json then comment below line*/
//       //res.render('spotify', { title: 'Spotify', spotify: rows});
//     })
//   });

//export
module.exports = router