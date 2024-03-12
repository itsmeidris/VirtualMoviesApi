const express = require('express');
const movieRouter = express.Router();

const movieController = require('../Controllers/movieController');

//Get movies
movieRouter.get('/' ,movieController.getAllMovies);

//Get movies by id
movieRouter.get('/:id' ,movieController.getMovieById);

//Post new movie to database
movieRouter.post('/' ,movieController.addMovie);

//Put an existing movie
movieRouter.put('/:id' ,movieController.updateMovie)

//Delete an movie
movieRouter.delete('/:id' ,movieController.deleteMovie); 

module.exports = movieRouter;