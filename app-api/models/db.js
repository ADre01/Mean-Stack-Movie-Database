var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/moviedata';
mongoose.connect(dbURI);


mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to '+ dbURI);
});

mongoose.connection.on('error', function(err){
    console.log("There was an error " + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose is now disconnected');
});


require('./movies');