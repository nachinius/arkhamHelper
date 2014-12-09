'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:arkhamLocation
 * @description
 * # arkhamLocation
 */
angular.module('arkhamHelperApp')
  .directive('arkhamLocation', function () {
    return {
      templateUrl: 'views/templates/arkhamLocationDirective.html',
      restrict: 'E',
      scope: {
        object: "="
      },
      controller: function($scope, $element, $attrs, $transclude, cardPileMonsters, cardPileGates) {
        $scope.cardPiles = {
            monsters: cardPileMonsters,
            gates: cardPileGates
        };
      },
      link: function postLink(scope, element, attrs) {
        scope.className = scope.object.location;
        scope.className.replace(/ /,'_');
      }
    };
  });
