var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: String,
    episode_number: {
        type: Number,
        default: 0,
        min: 1,
        max: 6
    },
    releaseYear: Number
});


mongoose.model('Movies', movieSchema);