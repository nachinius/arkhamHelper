'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileMonsters
 * @description
 * # cardPileMonsters
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileMonsters', function cardPileMonsters(cardPile, monstersData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var pile = cardPile('monsters');
    var newCard;
    
    // add card to the piles
    angular.forEach(monstersData, function(ele) {
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
