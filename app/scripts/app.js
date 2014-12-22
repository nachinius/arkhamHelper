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
        'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize',
            'underscore', 'ui.sortable', 'Shuffler', 'ui.bootstrap',
            'ngMaterial' ]).config(function($mdThemingProvider) {
      
      // configure the theme
      $mdThemingProvider.theme('default').primaryColor('purple').accentColor('deep-purple').warnColor('pink');
      
    }).run(
        
        // add google analytics on page change
        [ '$rootScope', '$location', '$window',
            function($rootScope, $location, $window) {
          
            if($location.host() == 'nachinius.github.io') {
              $rootScope.$on('$locationChangeSuccess', function(event) {

                if (!$window.ga)
                  return;
                
                $window.ga('send', 'pageview', {
                  page : $location.path()
                });
              });
            }
          }
        ]
    );







