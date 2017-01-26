myApp.controller('AddMovieController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.addMovie = function () {
        var movie = {
            title: $scope.title,
            episode_number: $scope.episode_number,
            releaseYear: $scope.releaseYear
        }
        $http.post('http://localhost:3000/api/movies/add', movie).then(function (result) {
           console.log(result);   
        }).catch(function (err) {
            console.log(err);
        });
    $location.path('/');
    }
}]);