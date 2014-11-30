'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileGates
 * @description
 * # cardPileGates
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileGates', function cardPileGates(cardPile, gatesData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var pile = cardPile('gates');
    var newCard;
    
    // add card to the piles
    angular.forEach(gatesData, function(ele) {
      for( var i = ele.quantity; i>0; i--) {

        // ignore @expansion
        if(angular.isDefined(ele.expansion) && ele.expansion !== "") {
          continue;
        }
        // each card needs to be independent
        newCard = angular.copy(ele);
        delete newCard.quantity;
        pile.add(newCard);
      }
    });
    
    pile.shuffle(7);
    
    return pile;
  });
