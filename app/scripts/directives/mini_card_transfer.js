'use strict';

/**
 * @ngdoc directive
 * @name arkhamHelperApp.directive:miniCardTransfer
 * @description
 * # miniCardTransfer
 */
angular.module('arkhamHelperApp')
  .directive('miniCardTransfer', function (activeInvestigators) {
  	var transform = { 'Common Items' : 'commonItems',
    		'Unique Items': 'uniqueItems',
    		'Spells' : 'spells'
    		};
    return {
      templateUrl: 'views/templates/miniCardTransferDirective.html',
      restrict: 'E',
      scope: {
          card : '=',
          inv: '=',
          type: '='
        },
      link: function postLink(scope, element, attrs) {
        scope.list = activeInvestigators.list;
        scope.showOptions = false;
        scope.transfer = function(targetInv, sourceInv) {
        	var bucket = sourceInv.cards[transform[scope.type]]; 
        	var card = bucket.removeByName(scope.card.name);
        	targetInv.cards[transform[scope.type]].add(card);
        }
      }
    };
  });
