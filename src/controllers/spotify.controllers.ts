import { Database } from "../db";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { Spotify, SpotifyDTO } from "src/models/spotify";
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
    
            
        if (err) {
            console.log("error: ", err);
            return res.status(400).json({message: 'Error'});

        }
        
        console.log('checking rows :::',rows);
        /*If you are creating api then get response in json format*/
        res.json(rows);

        /*If you don't want response as json then comment below line*/
        //   res.render('spotify', { title: 'Spotify', spotify: rows});

    }) 
}

export const postSpotify:RequestHandler = (req:Request, res:Response, next:NextFunction) => {
  
    const reqPayload : SpotifyDTO ={
        trackName: (req.body as { trackName:string } ).trackName,
        artistName: (req.body as { artistName:string } ).artistName,
        genre: (req.body as { genre:string } ).genre,
        popularity: (req.body as { popularity:number } ).popularity
    }
    
    let body: Spotify={
        track_name: reqPayload.trackName,
        artist_name: reqPayload.artistName,
        genre: reqPayload.genre,
        popularity: reqPayload.popularity
    }

    db.connection.query("INSERT INTO spotify_song SET ?", body, (err:Query.QueryError, result:ResultSetHeader) => {
        
        if (err) {
          console.log("error: ", err);
          return res.status(400).json({message: 'Error'});

        }
    
        res.status(201).json({message: 'Spotify created successfully',   data: { id: result.insertId, ...body }});
    });
};

export const updateSpotify: RequestHandler = (req:Request, res:Response, next:NextFunction) => {
    
    const reqPayload : SpotifyDTO ={
        id: (req.body as { id:number } ).id,
        trackName: (req.body as { trackName:string } ).trackName,
        artistName: (req.body as { artistName:string } ).artistName,
        genre: (req.body as { genre:string } ).genre,
        popularity: (req.body as { popularity:number } ).popularity
    }

    let body: Spotify={
        id:reqPayload.id,
        track_name: reqPayload.trackName,
        artist_name: reqPayload.artistName,
        genre: reqPayload.genre,
        popularity: reqPayload.popularity
    }

    db.connection.query(
        "UPDATE spotify_song SET track_name = ?, artist_name = ?, genre = ? , popularity = ? WHERE id = ?",
        [body.track_name, body.artist_name, body.genre, body.popularity,body.id],
        (err:Query.QueryError, result:ResultSetHeader) => {
          if (err) {
            console.log("error: ", err);
            return res.status(400).json({message: 'Error'});

          }
    
          if (result.affectedRows == 0) {
            // not found Tutorial with the id
            return res.status(404).json({message: 'Error: Not Found'});

          }
    
          console.log("updated tutorial: ", body);
          res.status(200).json({message: 'Spotify updated successfully',   data: body});
        }
      );

  };

  export const findById = (req:Request, res:Response, next:NextFunction) => {

    let splitUrl:string[] = req.url.split("/");

    let id:number = Number(splitUrl[0]);
    
    db.connection.query("SELECT * FROM spotify_song WHERE id = ?",
    [id],
     (err:Query.QueryError, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(400).json({message: 'Error'});

      }
  
      console.log("result: ", result);

      res.status(200).json({message: 'Data'});

    });
  };




