'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:controlPlusMinus
 * @description
 * # controlPlusMinus
 */
angular.module('arkhamHelperApp').directive(
    'plusMinus',
    function() {
      return {
        templateUrl : 'views/templates/plusMinus.html',
        restrict : 'E',
        scope : {
          value: '='
        },
        link: function(scope, element, attributes) {
          scope.plus = function() {
            scope.value = scope.value + 1;
          }
          scope.minus = function() {
            scope.value = scope.value - 1;
          }
        }
      };
    });
