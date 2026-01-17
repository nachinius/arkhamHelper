'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:selectAlly
 * @description # selectAlly
 */
angular.module('arkhamHelperApp').directive(
    'selectAlly',
    function() {

      return {
        templateUrl : '/views/templates/selectAllyDirective.html',
        restrict : 'E',
        scope: {
          'inv': '='
        },
        controller : function($scope, $transclude,
            cardPileAllies) {
          $scope.cardPileAllies = cardPileAllies;
        },
        link : function postLink($scope) {
          $scope.selecting = function(ally) {
            $scope.inv.cards.allies.drawByName(ally.name);
          };
        }
      };
    });
