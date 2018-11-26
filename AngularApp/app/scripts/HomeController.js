var app = angular.module('app');

app.controller('HomeController', function ($scope, $location, UserService) {
	$scope.title = "Test Title";
	$scope.description = 'test description';
	$scope.user;
	$scope.userData = [];
	$scope.pname;
	$scope.pstatus;
	$scope.plocation;
	$scope.showForm = false;

	$scope.logout = function(){
		localStorage.clear("token");
		$location.path('/login');
	}	


	$scope.getUser = function(){
		UserService.get({}, function(response){
			$scope.user = response;
			$scope.userData = response.data;
			console.log($scope.userData)
		})
	}

	$scope.getUser();

	$scope.onSubmit = function(){
		$scope.formData = {"project": $scope.pname, "status": $scope.pstatus, "logs": $scope.plogs, "location": $scope.plocation};
		$scope.userData.push($scope.formData);
		}

		$scope.add = function(){
			$scope.showForm = true;
		}

		$scope.remove = function(){
			var newDataList=[];
			angular.forEach($scope.userData,function(v){
			if(!v.isDelete){
					newDataList.push(v);
			}
	});    $scope.userData = newDataList;
	};
		
});

