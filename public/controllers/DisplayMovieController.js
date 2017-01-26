myApp.controller('DisplayMovieController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('http://localhost:3000/api/movies/' + $routeParams.id).then(function(result){
        $scope.movie = result.data;
        console.log($scope.movie);
    }).catch(function(err){
       console.log(err); 
    });
}]);