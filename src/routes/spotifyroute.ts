import { Router } from 'express';
import express from 'express';
import { index, getAll, postSpotify, updateSpotify, findById } from '../controllers/spotify.controllers';

export const spotifyRoutes = express.Router();

spotifyRoutes.get('', index);
spotifyRoutes.get('/getAll', getAll);
spotifyRoutes.post('/create', postSpotify);
spotifyRoutes.put('/update', updateSpotify);
spotifyRoutes.get("/:id", findById);


//** */
// const spotifyRoutes: Router = express.Router();

// // Request methods
// spotifyRoutes.get('', index);
// spotifyRoutes.get('/getAll', getAll);
// spotifyRoutes.post('/create', postSpotify);

// // Export the router
// export default spotifyRoutes;

//***** */

// export const spotifyRoutes= (() => {
        
//     let router : Router = Router();
          
//     router.get('', index);
//     router.get('/getAll', getAll);
//     router.post('/create', postSpotify);
    
//     return router;
// })();
 

// export const spotifyRoutes= () => {
        
//     let router : Router = Router();
          
//     router.get('', index);
//     router.get('/getAll', getAll);
//     router.post('/create', postSpotify);
    
//     return router;
// };