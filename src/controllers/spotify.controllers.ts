import { Database } from "../db";

const db = new Database();

export const index = (req:any, res:any) => {
    let arrNames: String[] = ['Iman', 'Nazirah'];
    res.render("spotify",{nameList:arrNames}); 
}

export const getAll = (req:any, res:any) => {

    var query = 'select * from spotify_song';
    db.connection.query(query, function(err, rows, fields) {
          console.log('checking err :::',err);
  
      if (err) throw err;
      
      console.log('checking rows :::',rows);
      /*If you are creating api then get response in json format*/
      res.json(rows);
  
      /*If you don't want response as json then comment below line*/
        //   res.render('spotify', { title: 'Spotify', spotify: rows});

    }) 
}

export const postSpotify = (req:any, res:any) => {
    res.json({data: req.body}) 

}


