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
        inv: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.selected = -1;
        var inv = scope.inv;
        var first = scope.first;
        var second = scope.second;
        scope.select = function(x) {
          inv['cur'+first] = inv['min'+first]+x;
          scope.selected = x;
        }
        scope.selected = inv['cur'+first]-inv['min'+first];
      }
    };
  });
