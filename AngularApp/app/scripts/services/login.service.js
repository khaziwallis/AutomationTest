var app = angular.module("app");

app.config(['$resourceProvider', function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.factory('loginService', function ($resource) {
  return $resource("http://localhost:3000/api/login", {} , {
      login: {
          method: 'POST',
          isArray: false,
      }   
  });
});


