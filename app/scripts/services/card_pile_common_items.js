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
    
    var pile = cardPile();
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
    
    pile.shuffle();

    return pile;
  });
