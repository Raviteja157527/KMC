(function(){
	'use strict';

	kmcModule = angular.module('kmcModule',['ui.router','ngRoute']);
	kmcModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
			  function($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'modules/home/home.html'
		});
		
	}])
	.run(function(){
		
	});
})();
