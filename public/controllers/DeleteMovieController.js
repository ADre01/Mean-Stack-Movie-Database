myApp.controller('DeleteMovieController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $scope.deleteMovie = function(){
        $http.delete('http://localhost:3000/api/movies/' + $routeParams.id).then(function(result){
            $location.path('#!/');
            console.log("Deleted Movie " + result);
        }).catch(function(err){
           console.log(err); 
        });
    }
}]);