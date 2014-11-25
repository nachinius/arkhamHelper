'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileAllies
 * @description
 * # cardPileAllies
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .service('cardPileAllies', function cardPileAllies(cardPile, alliesData) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	  
	  var pile = cardPile('allies');
      var newCard;
      
      // add cards to the piles
      angular.forEach(alliesData, function(ele) {
          if (ele.expansion) {
            return;
          }
          // each card needs to be independent
          newCard = angular.copy(ele);
          pile.add(newCard);
      });
      
      // my granmother always told to shuffle decks 7 times :)
      pile.shuffle(7);
      
      return pile;
  });
