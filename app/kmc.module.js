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
		}).state('doctors-staff',{
			url:'/doctors-staff',
			templateUrl:'app/modules/home/doctors-staff.html'
		}).state('surgery-times',{
			url:'/surgery-times',
			templateUrl:'app/modules/home/surgery-times.html'
		}).state('clinics',{
			url:'/clinics',
			templateUrl:'app/modules/home/clinics.html'
		}).state('contact-us',{
			url:'/contact-us',
			templateUrl:'app/modules/home/contact-us.html'
		});
		$locationProvider.html5Mode(true);
	}])
	.run(function(){
		
	});
})();
