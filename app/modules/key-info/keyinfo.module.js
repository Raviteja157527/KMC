(function(){
	'use strict';
	kmcKeyinfoModule= angular.module('kmcKeyinfoModule',[]);
	kmcKeyinfoModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
		 function($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		 	$stateProvider
		 	.state('Named-GP',{
		 		url:'/namedgp',
		 		templateUrl:'app/modules/key-info/ngpp.html'
		 	});
	}]);
})();