var mongoose = require('mongoose');
var Movies = mongoose.model('Movies');

module.exports.getMovies = function (req, res, next) {
    Movies.find({}, function (err, movieslist) {
        res.json(movieslist);

    });

}

module.exports.getMovie = function (req, res, next) {
    Movies.findById(req.params.id).exec(function (err, movie) {
        if (!movie) {
            console.log('no movie found');
        } else if (err) {
            console.log(err);
        }
        res.json(movie);
    });
}

module.exports.addMovie = function (req, res, next) {
    var movie = new Movies(req.body).
    save(function (err, savedMovie) {
        if (!err) {
            console.log(savedMovie);
        } else if (err) {
            console.log(err);
        }
    });
}

module.exports.editMovie = function (req, res, next) {
    Movies.findById(req.params.movieid).select('title episode_number releaseYear').then(function(movie){
        movie.title = req.body.title;
            movie.episode_number = req.body.episode_number;
            movie.releaseYear = req.body.releaseYear;
        movie.save(function(err, movie){
            if(err){
                res.send(err);
            }else{
                res.send(movie);
            }
        }).catch(function(err){
            console.log(err);    
        });
    });
}

module.exports.deleteMovie = function (req, res, next) {
    Movies.findByIdAndRemove(req.params.movieid).then(function(result){
        console.log(result);
        res.status(200);
    }).catch(function(err){
       console.log(err);
    });
}