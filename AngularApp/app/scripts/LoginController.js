var app = angular.module('app');

app.controller('LoginController', function ($scope, $location, loginService) {
	$scope.show = false;
	$scope.login = function () {
		loginService.login({}, {
			userName: $scope.userName,
			password: $scope.password
		},function (response) {
					console.log(response);
					localStorage.setItem("token", response.token);
					$location.path('/home');
		});	
		$scope.show = true;
	};
});



