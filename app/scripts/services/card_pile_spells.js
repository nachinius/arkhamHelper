'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileSpells
 * @description
 * # cardPileSpells
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileSpells', function cardPileSpells(cardPile, spellItemsData) {
    
    var pile = cardPile();
    var newCard;
    
    // add cards to the piles
    angular.forEach(spellItemsData, function(ele) {
      for(var i=ele.quantity;i>0;i--) {
        
        if(ele.expansion !== "") {
          continue;
        }
        // since there are two cards
        // each card needs to be independent
        newCard = angular.copy(ele);
        delete newCard.quantity;
        pile.add(newCard);
      }
    });

    // my granmother always told to shuffle decks 7 times :)
    pile.shuffle(7);

    return pile;
  });