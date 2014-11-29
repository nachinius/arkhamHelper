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
        controller : function($scope, $element, $attrs, $transclude,
            cardPileAllies) {
          $scope.cardPileAllies = cardPileAllies;
        },
        link : function postLink($scope, $element, $attrs) {
          $scope.selecting = function(ally) {
            $scope.inv.cards.allies.drawByName(ally.name);
          }
        }
      };
    });
