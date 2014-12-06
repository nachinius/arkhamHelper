'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:arkhamLocation
 * @description
 * # arkhamLocation
 */
angular.module('arkhamHelperApp')
  .directive('arkhamLocation', function (cardPileMonsters, cardPileGates) {
    return {
      templateUrl: 'views/templates/arkhamLocationDirective.html',
      restrict: 'E',
      scope: {
        object: "="
      },
      link: function postLink(scope, element, attrs) {
        scope.cardPiles = {
            monsters: cardPileMonsters,
            gates: cardPileGates
        };
      }
    };
  });
