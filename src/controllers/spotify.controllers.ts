import { Database } from "../db";
import { Request, Response } from "express";
const db = new Database();

export const index = (req:Request, res:Response) => {
    let arrNames: String[] = ['Iman', 'Nazirah'];
    res.render("spotify",{nameList:arrNames}); 
}

export const getAll = (req:Request, res:Response) => {

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

export const postSpotify = (req:Request, res:Response) => {
    res.json({data: req.body}) 

}


