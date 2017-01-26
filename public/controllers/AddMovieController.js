myApp.controller('AddMovieController', ['$scope', '$http', function ($scope, $http) {

    $scope.addMovie = function () {
        var movie = {
            title: $scope.title,
            episode_number: $scope.episode_number,
            releaseYear: $scope.releaseYear
        }
        console.log(movie);
        $http.post('http://localhost:3000/api/movies/add', movie).then(function (result) {
            console.log("Added movie " + result);
        }).catch(function (err) {
            console.log(err);
        });

    }
}]);