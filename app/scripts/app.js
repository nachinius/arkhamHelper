'use strict';

/**
 * @ngdoc overview
 * @name arkhamHelperApp
 * @description # arkhamHelperApp
 * 
 * Main module of the application.
 */
angular
    .module(
        'arkhamHelperApp',
        [
        // 'ngAnimate',
        'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch',
            'underscore', 'ui.sortable', 'Shuffler', 'ui.bootstrap',
            'ngMaterial' ]).config(function($routeProvider, routeConfig) {

      angular.forEach(routeConfig, function(route) {

        $routeProvider.when(route.location, route)
      });
      $routeProvider.otherwise({
        redirect : '/'
      });
      console.log($routeProvider);
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
