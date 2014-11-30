'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPileSkills
 * @description
 * # cardPileSkills
 * Service in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').service('cardPileSkills',
    function cardPileSkills(cardPile, skillsData) {
      
      var pile = cardPile('skills');
      var newCard;
      
      // add cards to the piles
      angular.forEach(skillsData, function(ele) {
        for (var i = ele.quantity; i > 0; i--) {
          
          // ignore @expasion
          if (ele.expansion !== "") {
            continue;
          }
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
