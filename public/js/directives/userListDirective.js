define(['directives/directiveModule','jquery','jqueryUI'],function(directiveModule,$,jqueryUI){
	var elemId,self;
    directiveModule.directive('userListDirective',[function() {
    	self=this;

		return {
			restrict:'EA',
			scope:{
				firstName:'@firstName',
				lastName:'@lastName',
				userId:'@userId',
				City:'@userCity',
				ctrlFn : '&',
				delete:'&',
				userDetails:'@userDetails'
			},
			template:'<li>{{firstName}}&nbsp;{{lastName}}&nbsp;{{City}}<ul><li ng-Click="editUser(userDetails)">edit</li><li class="delete-user" ng-Click="deleteUser(userDetails)">delete</li></ul></li>',	
			link:function($scope, elem, attrs){
				$scope.deleteUser=function(e) {
					console.log(JSON.parse(e))

				}
				$scope.editUser = function(e) {
					$scope.ctrlFn();
				}

			},
		};
	}])
})