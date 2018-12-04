var app = angular.module('app');

app.controller('HomeController', function ($scope, $location, UserService, $timeout) {
	$scope.title = "Test Title";
	$scope.description = 'test description';
	$scope.user;
	$scope.userData = [];
	$scope.pname;
	$scope.pstatus;
	$scope.plocation;
	$scope.showForm = false;
	$scope.addMsg = false;

	$scope.logout = function(){
		localStorage.clear("token");
		$location.path('/login');
	}	


	$scope.getUser = function(){
		UserService.get({}, function(response){
			$scope.user = response;
			$scope.userData = response.data;
		})
	}

	$scope.getUser();

	$scope.onSubmit = function(){
		$scope.formData = {"project": $scope.pname, "status": $scope.pstatus, "logs": $scope.plogs, "location": $scope.plocation};
		$scope.userData.push($scope.formData);
		$scope.addMsg = true;
		$timeout(function(){
			$scope.addMsg = false;
		},3000);
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

