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
        'ngAnimate',
        'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch',
            'underscore', 'ui.sortable', 'Shuffler', 'ui.bootstrap',
            'ngMaterial' ]).config(function($routeProvider, routeConfig, $mdThemingProvider) {

              
              (function setTopMenuOrder(routeConfig) {
               var orderedList = _.chain(routeConfig).filter(function(ele) {
                  return angular.isDefined(ele.topMenuOrder);
                }).sortBy('topMenuOrder').value();
                var length = orderedList.length;
                angular.forEach(orderedList, function(ele, idx) {

                  if (idx === 0) {
                    ele.prev = orderedList[length - 1].location;
                    ele.prevName = orderedList[length - 1].name;
                  } else { 
                    ele.prev = orderedList[idx - 1].location;
                    ele.prevName = orderedList[idx-1].name;
                  }
                  if (idx === length - 1) {
                    ele.next = orderedList[0].location;
                    ele.nextName = orderedList[0].name;
                  } else {
                    ele.next = orderedList[idx + 1].location;
                    ele.nextName = orderedList[idx + 1].name;
                  }
                });
              })(routeConfig);
              
              // configure the routes
              angular.forEach(routeConfig, function(route) {
                $routeProvider.when(route.location, route)
              });
              $routeProvider.otherwise({
                redirect : '/'
              });
      
      // configure the theme
      $mdThemingProvider.theme('default').primaryColor('purple').accentColor('deep-purple').warnColor('pink');
      
      
    }).run(
        
        // add google analytics on page change
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
            







