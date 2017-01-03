(function(){
	'use strict';
	kmcModule = angular.module('kmcKeyinfoModule',[]);
	kmcModule.config(['$windowProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
		 function($windowProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		 	$stateProvider
		 	.state('named-gp',{
		 		url:'/namedgp',
		 		templateUrl:'app/modules/key-info/ngpp.html'
		 	});
	}]);
})();
