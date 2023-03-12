//Import
var db = require('../db');
// Method
const index = (req, res) => {
    arrNames = ['Iman', 'Nazirah'];
    res.render("spotify",{nameList:arrNames}); 
}

const test = (req, res) => {
    var query = 'select * from spotify_song';
    db.query(query, function(err, rows, fields) {
          console.log('checking err :::',err);
  
      if (err) throw err;
      
      console.log('checking rows :::',rows);
      /*If you are creating api then get response in json format*/
      res.json(rows);
  
      /*If you want response as json then comment below line*/
    //   res.render('spotify', { title: 'Spotify', spotify: rows});
    }) 
}


// Export
module.exports = {
    index,
    test
   
};