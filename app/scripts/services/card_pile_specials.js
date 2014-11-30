'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileSpecials
 * @description # cardPileSpecials Service in the
 *              arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service('cardPileSpecials',
    function cardPileSpecials(cardPile, specialsCardsData) {

      // AngularJS will instantiate a singleton by calling
      // "new" on this function
      var pile = cardPile('specials');
      var newCard;
      
      // add cards to the piles
      angular.forEach(specialsCardsData, function(ele) {

        if (ele.finite) {
          ele.quantity = 1;
        } else {
          // number of players
          ele.quantity = 8;
        }
        for (var i = ele.quantity; i > 0; i--) {
          
          // ignore @expansion
          if (angular.isDefined(ele.expansion) && ele.expansion !== "") {
            continue;
          }
          // each card needs to be independent
          newCard = angular.copy(ele);
          delete newCard.quantity;
          pile.add(newCard);
        }
      });
      
      return pile;
    });
