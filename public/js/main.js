require.config({
    baseUrl: "",
    
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular-route.min',
        'angular-resource' : 'js/lib/angular-resource.min',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min',
        'angular-uiroute':"../js/lib/angular-ui-router",
        'controllers':'../js/controllers',
        'directives':'../js/directives',
        'jquery':'../js/lib/jquery',
        'jqueryUI':'../js/lib/jquery-ui'
    },
    
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-uiroute':['angular'],
        'jqueryUI':['jquery'],
        'jquery':{
            'exports':'$'
        },
        'jqueryUI':{
            'exports':'jqueryUI'
        }
    },
    
    // kick start application
    deps: ['js/Scripts/routerConfig']
});