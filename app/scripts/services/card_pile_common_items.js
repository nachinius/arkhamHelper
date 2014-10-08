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
    
    var pile = cardPile;
    
    _.each(commonItemsData, function(ele) {
      for(var i=ele.quantity;i>0;i--) {
        pile.add(ele);
      }
    });

    return pile;
  });
