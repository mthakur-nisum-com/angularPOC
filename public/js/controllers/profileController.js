define(['controllers/homeController'],function(homeController){
	 homeController.controller("profileController",['$scope','$http','$state',function($scope,$http,$state){
	 	$scope.val="abc";
	 	
	 	$scope.processProfile=function(argument) {
	 		$http({
	 			method: 'POST',
  				url: '/createProfile',
		      	data:argument
		   }).success(function(response){
		   		var resultObj=Object.keys(response);
		   		resultObj=response[resultObj[0]];
		   		if(resultObj.status) {
		   			$state.go('home.users');
		   		}	
		   });
	 	}
	}]);
});