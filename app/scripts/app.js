'use strict';

/**
 * @ngdoc overview
 * @name arkhamHelperApp
 * @description
 * # arkhamHelperApp
 *
 * Main module of the application.
 */
angular.module(
		'arkhamHelperApp',
		[ 'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize',
				'ngTouch', 'underscore', 'ui.sortable', 'Shuffler',
				'ui.bootstrap' ]).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/main.html',
		controller : 'MainCtrl'
	}).when('/about', {
		templateUrl : 'views/about.html',
		controller : 'AboutCtrl'
	}).when('/investigator', {
		templateUrl : 'views/investigator.html',
		controller : 'InvestigatorCtrl'
	}).when('/settings', {
		templateUrl : 'views/settings.html',
		controller : 'SettingsCtrl'
	}).when('/arkham_encounters', {
		templateUrl : 'views/arkham_encounters.html',
		controller : 'ArkhamEncountersCtrl'
	}).otherwise({
		redirectTo : '/'
	});
}).run(
		[ '$rootScope', '$location', '$window',
				function($rootScope, $location, $window) {
					$rootScope.$on('$locationChangeSuccess', function(event) {

						if (!$window.ga)
							return;

						$window.ga('send', 'pageview', {
							page : $location.path()
						});
					});
				} ]);