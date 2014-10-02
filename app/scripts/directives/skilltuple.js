'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:skillTuple
 * @description
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
        inv: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.selected = -1; 
        scope.change = function(val) {
          scope.selected = val;
        }
      }
    };
  });
