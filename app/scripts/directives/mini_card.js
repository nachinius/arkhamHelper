'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:miniCard
 * @description
 * # miniCard
 */
angular.module('arkhamHelperApp')
  .directive('miniCard', function ($modal) {
    return {
      templateUrl: 'views/templates/miniCardDirective.html',
      restrict: 'E',
      scope: {
        cards : '='
      },
      link: function postLink(scope, element, attrs) {
        scope.openModal = function(card, cards) {
          scope.selectedCard = card;
          $modal.open({
            templateUrl : 'views/templates/miniCardModal.html',
            scope : scope,
            controller: 'miniCardModelCtrl'
          })
        }
      }
    };
  });

angular.module('arkhamHelperApp').controller('miniCardModelCtrl', function($scope) {
  $scope.cards = $scope.$parent.cards;
  $scope.card = $scope.$parent.selectedCard;
})
