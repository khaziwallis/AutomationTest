require('angular');
require('angular-route');

var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
