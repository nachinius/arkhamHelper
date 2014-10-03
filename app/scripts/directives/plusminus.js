'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:controlPlusMinus
 * @description Add a Plus symbol and a Minus symbol
 * that when clicked control an integer number which
 * must be provided.
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
