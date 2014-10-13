'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileUnique
 * @description
 * # cardPileUnique
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileUnique', function cardPileUnique(cardPile, uniqueItemsData) {
    
    var pile = cardPile('uniqueItems');
    var newCard;
    
    // add cards to the piles
    angular.forEach(uniqueItemsData, function(ele) {
      ele.image = ele.name;
      ele.image = ele.image.replace(/ (.)/g, function(match, group1) {
        return group1.trim().toUpperCase();
      }).replace(/[ '-]/g,'');
      for(var i=ele.quantity;i>0;i--) {
        
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


