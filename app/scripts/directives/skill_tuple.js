'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:skillTuple
 * @description Render two set of numbers. One increase
 * while the other decreases.
 * # skillTuple
 */
angular.module('arkhamHelperApp')
  .directive('skillTuple', function () {
    return {
      templateUrl : 'views/templates/skilltupleDirective.html',
      restrict: 'E',
      scope: {
        first: '@',
        second: '@',
        inv: '=',
        availableFocus: '='
      },
      link: function postLink(scope, element, attrs) {
        // keep which one has been selected
        scope.selected = -1;
        
        // shortcuts
        var inv = scope.inv;
        var first = scope.first;
        var second = scope.second;
        
        // on change
        scope.select = function(x) {
          var change = Math.abs(scope.selected-x);
          if(change > scope.availableFocus) {
            return;
          } else {
            scope.availableFocus = scope.availableFocus - change; 
          }
          inv['cur'+first] = inv['min'+first]+x;
          scope.selected = x;
        }
        
        // on first run, find which one is the default
        scope.selected = inv['cur'+first]-inv['min'+first];
      }
    };
  });
