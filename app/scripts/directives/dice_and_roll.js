'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:diceAndRoll
 * @description
 * # diceAndRoll
 */
angular.module('arkhamHelperApp')
  .directive('diceAndRoll', function (_) {
    return {
      templateUrl: 'views/templates/diceAndRollDirective.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs, $transclude) {
        var diceRoll = function() {
          return Math.floor(Math.random()*6)+1;
        }
        var diceCountSuccess = function() {
          return _.reduce($scope.dices.result, function(memo, num) {
            return memo + (($scope.dices.threshold <= num.number) ? 1 : 0);
          },0);
        };
        var evaluateSuccess = $scope.evaluateSuccess = function() {
          $scope.dices.success = diceCountSuccess();
        }
        $scope.roll = function() {
          $scope.dices.result.length = 0;
          var count = $scope.dices.count;
          for(var i =0; i< count; i++) {
            $scope.dices.result.push({number: diceRoll()});
          }
          //$scope.dices.result.sort();
          $scope.dices.sequence++;
          evaluateSuccess();
        }
        $scope.extraRoll = function() {
          $scope.dices.result.push({number: diceRoll()});
          $scope.dices.sequence++;
          evaluateSuccess();
        };
        $scope.reRoll = function() {
          var count = $scope.dices.result.length;
          $scope.dices.result.length = 0;
          for(var i =0; i< count; i++) {
            $scope.dices.result.push({number: diceRoll()});
          }
          $scope.dices.sequence++;
          evaluateSuccess();
          $scope.digest();
        };
      },
      link: function postLink(scope, element, attrs) {
        scope.dices = {};
        scope.dices.result = [];
        scope.dices.count = 1;
        scope.dices.sequence = 0;
        scope.dices.threshold = 5;
        scope.dices.success = 0;
      }
    };
  });
