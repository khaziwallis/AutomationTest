var app = angular.module('app');

app.controller('HomeController', function ($scope, $location, UserService) {
	$scope.title = "Test Title";
	$scope.description = 'test description';
	$scope.user;
	$scope.userData = [];
	$scope.logout = function(){
		localStorage.clear("token");
		$location.path('/login');
	}	

	$scope.getUser = function(){
		UserService.get({}, function(response){
			$scope.user = response;
			$scope.userData = response.data;
			console.log($scope.userData);
		})
	}

	$scope.getUser();

});

