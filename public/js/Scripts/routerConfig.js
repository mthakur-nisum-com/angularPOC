define(['angularAMD','angular-uiroute','controllers/commonController','controllers/homeController','controllers/contentController'],function(angularAMD,angularRoute,commonController,homeController,contentController){
	var abc={};
	var app=angular.module('myapp',['ui.router','commonController']);
	console.log(commonController);
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
						 templateUrl: '../js/templates/profileForm.html'
					}
				}
		});
	})
	return angularAMD.bootstrap(app);
})