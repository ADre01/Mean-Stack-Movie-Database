myApp.controller('MovieListController', ['$scope',
    '$http',
    function ($scope, $http) {
            $http.get('http://localhost:3000/api/movies').
            then(function (response) {
                $scope.movielist = response.data;
                console.log($scope.movielist);
            }).catch(function (err) {
                console.log(err);
            });
}]);