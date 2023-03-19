import { Database } from "../db";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { Spotify } from "src/models/spotify";
import { ResultSetHeader } from "mysql2";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
const db = new Database();

export const index = (req:Request, res:Response) => {
    let arrNames: String[] = ['Iman', 'Nazirah'];
    res.render("spotify",{nameList:arrNames}); 
}

export const getAll = (req:Request, res:Response) => {

    let query: string = 'select * from spotify_song';
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

export const postSpotify:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
  
    const trackName = (req.body as { trackName:string } ).trackName; 
    const artistName = (req.body as { artistName:string } ).artistName;
    const genre = (req.body as { genre:string } ).genre;
    const popularity = (req.body as { popularity:number } ).popularity;
    
    let body: Spotify={
        track_name: trackName,
        artist_name: artistName,
        genre: genre,
        popularity: popularity
    }

    db.connection.query("INSERT INTO spotify_song SET ?", body, (err:Query.QueryError, result:ResultSetHeader) => {
        
        if (err) {
          console.log("error: ", err);
          return res.status(400).json({message: 'Error'});

        }
    

        res.status(201).json({message: 'Spotify created successfully',   data: { id: result.insertId, ...body }});
    });
};




