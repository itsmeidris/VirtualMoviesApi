const movies = require('../Data/movies');

const getAllMovies = (req ,res) =>{
    res.send(movies);
}

const getMovieById = (req ,res) =>{
    const movieRequestId = parseInt(req.params.id);
    const movieFoundById = movies.find((mv) => mv.id === movieRequestId);

    if(movieFoundById){
        res.status(200).send(movieFoundById);
    }else{
        res.status(400).send(`MOVIE NOT FOUND !`);
    }
}

const addMovie = (req ,res) =>{
    const {id ,title ,director ,year} = req.body;
    const newMovie = {
        id,
        title,
        director,
        year
    }
    if(newMovie){
        movies.push(newMovie);
        res.status(201).send(`NEW MOVIE ADDED SUCCESFULLY !`);
    }else{
        res.send(400).send(`NEW MOVIE IS NOT ADDED !`);
    }
}

const updateMovie = (req ,res) =>{
    const {id ,title ,director ,year} = req.body;
    const movieRequestId = parseInt(req.params.id);
    const movieFoundByIndex = movies.findIndex((mv) => mv.id === movieRequestId);

    if(movieFoundByIndex !== -1){
        movies[movieFoundByIndex] = {
            id,
            title,
            director,
            year
        }
        res.status(200).send(`MOVIE UPDATED SUCCESSFULLY !`);
    }else{
        res.status(400).send(`UNABLE TO UPDATE MOVIE !`);
    }
}

const deleteMovie = (req ,res) =>{
    const movieRequestId = parseInt(req.params.id);
    const movieFoundByIndex = movies.findIndex((mv) => mv.id === movieRequestId);

    if(movieFoundByIndex !== -1){
        movies.splice(movieFoundByIndex ,1);
        res.status(200).send(`MOVIE HAS BEEN DELETED !`);
    }else{
        res.status(404).send('MOVIE IS NOT FOUND');
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}