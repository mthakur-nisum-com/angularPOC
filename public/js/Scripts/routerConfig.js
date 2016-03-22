define(['angularAMD','angular-uiroute','controllers/commonController','controllers/homeController','controllers/contentController','controllers/profileController','controllers/userListController','directives/directiveModule','directives/userListDirective','directives/commonOverlay'],function(angularAMD,angularRoute,commonController,homeController,contentController,profileController,userListController,directiveModule,userListDirective){
	var abc={};
	console.log(userListDirective)
	var app=angular.module('myapp',['ui.router','commonController','directiveModule']);
	app.config(function($stateProvider, $urlRouterProvider){
		$stateProvider.state('home',{
				url: '',
				/*templateUrl:'../templates/home.html',
				controller:'homeController'*/
				views:{
					'header@':{
						 templateUrl: '../js/templates/home.html',
                         controller: "homeController as headerCtrl"
					},
					'content@':{
						templateUrl: '../js/templates/content.html',
                        controller: "contentController as contentCtrl"
					},
					'footer@':{
						templateUrl: '../js/templates/footer.html'
                        
					}
				}
		})
		.state('home.profile',{
				url:'/profile',
				/*templateUrl:'../templates/home.html',
				controller:'homeController'*/

				views:{
					'content@':{
						 templateUrl: '../js/templates/profileForm.html',
						 controller: "profileController as contentCtrl"
					},
					'footer@':{
						templateUrl:''
					}
				}
		})
		.state('home.users',{
				url:'/users',
				/*templateUrl:'../templates/home.html',
				controller:'homeController'*/

				views:{
					'content@':{
						 templateUrl: '../js/templates/userList.html',
						 controller: "userListController as contentCtrl"
					},
					'footer@':{
						templateUrl:''
					}
				}
		});
	})
	return angularAMD.bootstrap(app);
})