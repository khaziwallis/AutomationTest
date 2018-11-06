var app = angular.module('app');

app.controller('HomeController', function ($scope, $location) {
	$scope.title = "Test Title";
	$scope.description = 'test description';

	$scope.logout = function(){
		localStorage.clear();
		$location.path('/login');
	}
	
});
