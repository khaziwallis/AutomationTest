require('angular');
require('angular-route');
require('angular-resource');


var app = angular.module('app',['ngRoute', 'ngResource']);
app.config(function($routeProvider, $locationProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);

    $routeProvider.when('/', {
        templateUrl: '/views/login.html',
        controller: 'LoginController'
    })

    $routeProvider.when('/home', {
        templateUrl: '/views/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

}).run(function($location){
   var token = localStorage.getItem("token");
   if(token){
       $location.path('/home');
   }
})
