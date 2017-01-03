(function(){
	'use strict';

	kmcModule = angular.module('kmcModule',['ui.router','kmcKeyinfoModule']);
	kmcModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
			  function($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'app/modules/home/home.html'
		});
		$locationProvider.html5Mode(true);
	}])
	.run(function(){
		
	});
})();
