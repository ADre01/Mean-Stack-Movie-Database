myApp.controller('DeleteMovieController', ['$scope', '$http', '$routeParams',function($scope, $http, $routeParams){
    $scope.deleteMovie = function(){
        $http.delete('http://localhost:3000/api/movies/' + $routeParams.id).then(function(result){
            console.log("Deleted Movie " + result);
        }).catch(function(err){
           console.log(err); 
        });
    }
}]);