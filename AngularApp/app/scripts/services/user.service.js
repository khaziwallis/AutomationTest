var app = angular.module("app");

app.config(['$resourceProvider', function ($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.factory('UserService', function ($resource) {
  return $resource("http://localhost:3000/api/user001", {} , {
      get: {
          method: 'GET',
          isArray: false,
      }   
  });
});

