'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileCommonItems
 * @description
 * # cardPileCommonItems
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileCommonItems', function cardPileCommonItems(cardPile, commonItemsData, _) {
    
    var pile = cardPile();
    var newCard;
    
    _.each(commonItemsData, function(ele) {
      for(var i=ele.quantity;i>0;i--) {
        newCard = angular.copy(ele);
        delete newCard.quantity;
        pile.add(newCard);
      }
    });
    
    pile.shuffle();

    return pile;
  });
