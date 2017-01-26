var express = require('express');
var router = express.Router();
var MoviesCtrl = require('../controllers/movies');

//routes for movies CRUD
router.get('/movies', MoviesCtrl.getMovies);
router.get('/movies/:id', MoviesCtrl.getMovie);
router.post('/movies/add', MoviesCtrl.addMovie);
router.put('/movies/:movieid', MoviesCtrl.editMovie);
router.delete('/movies/:movieid', MoviesCtrl.deleteMovie);

module.exports = router;