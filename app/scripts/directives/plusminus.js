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
          value: '=',
          size: '@',
          show: '@',
          max: '=?'
        },
        link: function(scope, element, attributes) {
          
          if(angular.isDefined(scope.max)) {
            scope.$watch('max', function(newValue, oldValue) {
              if(newValue < oldValue && scope.value > newValue) {
                scope.value = newValue;
              }
            });
          }
          
          scope.plus = function() {
            if(angular.isDefined(scope.max) && scope.value >= scope.max) {
                return;
            }
            scope.value = scope.value + 1;
          };
          scope.minus = function() {
            if(scope.value <= 0) {
              return;
            }
            scope.value = scope.value - 1;
          };
          element.children().addClass(scope.size);
        }
      };
    });
