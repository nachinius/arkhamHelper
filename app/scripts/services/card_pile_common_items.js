'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileCommonItems
 * @description
 * # cardPileCommonItems
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileCommonItems', function cardPileCommonItems(cardPile, commonItemsData) {
    
    var pile = cardPile('commonItems');
    var newCard;
    
    // add cards to the piles
    angular.forEach(commonItemsData, function(ele) {
      for(var i=ele.quantity;i>0;i--) {
        
        // since there are two cards
        // each card needs to be independent
        newCard = angular.copy(ele);
        delete newCard.quantity;
        pile.add(newCard);
      }
    });
    
    // my granmother always told me to shuffle decks 7 times :)
    pile.shuffle(7);

    return pile;
  });
