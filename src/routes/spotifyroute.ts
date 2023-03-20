import { Router } from 'express';
import express from 'express';
import { index, getAll, postSpotify, updateSpotify, findById, deleteById, getSpecification } from '../controllers/spotify.controllers';

export const spotifyRoutes = express.Router();

spotifyRoutes.get('', index);
spotifyRoutes.get('/getAll', getAll);
spotifyRoutes.post('/create', postSpotify);
spotifyRoutes.put('/update', updateSpotify);
spotifyRoutes.get('/:id', findById);
spotifyRoutes.delete('/:id', deleteById);
spotifyRoutes.get('/query', getSpecification);
