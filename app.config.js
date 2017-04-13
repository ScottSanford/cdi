angular.module("cdiApp", [
        'ngMaterial', 
        'ngMdIcons', 
        'ngAnimate', 
        'ui.router', 
        'myFilters', 
        'myDirectives', 
        'mdSticky', 
        'slick'
    ])

    .config(function ($compileProvider, $stateProvider, $urlRouterProvider) { 

          $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:|https:\/\/|http:\/\/|data:image)/);

          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/home");
          
          $stateProvider
                .state('/', {
                    url: '/home', 
                    templateUrl: 'components/home/home.html',                    
                    controller: 'HomeCtrl'
                })

          $stateProvider
                .state('/sub', {
                    url: '/sub/:subSlug', 
                    templateUrl: 'components/sub/sub.html',                    
                    controller: 'SubCtrl'
                })

          $stateProvider
                .state('/allreports', {
                    url: '/allreports?id', 
                    templateUrl: 'components/allreports/allreports.html',                    
                    controller: 'AllReportsCtrl'
                });


    });
        