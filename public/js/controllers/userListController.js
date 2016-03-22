define(['controllers/commonController','directives/commonOverlay'],function(commonController,commonOverlay){
	 commonController.controller("userListController",['$scope','$http','$state',function($scope,$http,$state){
	 	$scope.modalShown=false;
	 	$http({
	 		method:'GET',
	 		'url':'/getUserList'
	 	}).success(function(response){
	 		var resultObj = Object.keys(response);
	 		resultObj= response[resultObj[resultObj.length-resultObj.length]];
	 		$scope.userList = resultObj.userList;
	 		$scope.editUser=function(e) {
					$scope.modalShown = !$scope.modalShown;
					console.log(JSON.parse(e))
			}
			$scope.ctrlFn=function(e) {
				console.log(e)
				$scope.modalShown=true;
			}
			$scope.hideOverlay =function(){
		 		$scope.modalShown=false;
		 	}
	 	});
	}]);
});