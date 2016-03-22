myApp.config(function($stateProvider,$urlRouterProvider){
   $urlRouterProvider.otherwise('/dashboard'); 
    
    $stateProvider.state('dashboard', {
						url : '/dashboard',
						templateUrl : 'template/dashboard.html',
                        controller:'dashboardCtrl'
					})
    .state('home', {
						url : '/home',
						templateUrl : 'template/home.html',
                        controller:'homeController'
					})
    .state('setting', {
						url : '/setting',
						templateUrl : 'template/setting.html',
                        controller:'settingController'
					})
    .state('about', {
						url : '/about',
						templateUrl : 'template/about.html',
                        controller:'aboutController'
					})
    .state('test', {
						url : '/test',
						templateUrl : 'template/test.html',
                        controller:'testController'
					})
})


