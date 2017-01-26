var myApp = angular.module('myApp', ['ngRoute', 'ngResource'])


.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: 'movielist.html',
        controller: 'MovieListController'
    }).
    when('/add', {
        templateUrl: 'addMovie.html',
        controller: 'AddMovieController'
    }).
    when('/:id', {
        templateUrl: 'displayMovie.html',
        controller: 'DisplayMovieController'
    }).
    when('/edit/:id', {
        templateUrl: 'editMovie.html',
        controller: 'EditMovieController'
    }).
    when('/delete/:id', {
        templateUrl: 'deleteMovie.html',
        controller: 'DeleteMovieController'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);