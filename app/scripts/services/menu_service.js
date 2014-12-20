'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.menuService
 * @description # menuService Service in the
 *              arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service('menuService',
    function(routeConfig, $location, $route, _) {

      var srv = this;
      
      srv.menu = {
        currentSection : {
          name : ''
        }
      };
      
      // put the menu section
      srv.onRouteChangeSuccess = function(event) {
        srv.menu.currentSection = $route.current.$$route;
      }

      

      /**
       * @ngdoc method
       * @name menuService#left
       * @description Switch the menu/route to the `left`
       *              where `left` is through the numerical
       *              order in topMenuOrder in routeConfig
       */
      srv.left = function() {
        $location.path(srv.menu.currentSection.prev);
      }
      srv.right = function() {

        $location.path(srv.menu.currentSection.next);
      }

      return this;
    }).
    
    run(
    // register listener on global events
    [ '$rootScope', '$location', 'menuService',
        function($rootScope, $location, menuService) {

          $rootScope.$on('$routeChangeSuccess', function(event) {

            menuService.onRouteChangeSuccess(event);
          });
        } ]);
