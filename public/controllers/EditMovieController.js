myApp.controller('EditMovieController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('http://localhost:3000/api/movies/' + $routeParams.id).then(function(result){
        $scope.form = result.data;
    }).catch(function(err){
        console.log(err);
    });
    
    
    $scope.editMovie = function(){
        $http.put('http://localhost:3000/api/movies/' + $routeParams.id, $scope.form).then(function(result){
            console.log("Movie Edited ", result);
        }).catch(function(err){
           console.log(err); 
        });
    }
}]);