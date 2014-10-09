'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardBucket
 * @description
 * # cardBucket
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp')
  .factory('cardBucket', function (cardPile) {
    // Service logic

    /**
     * @param {string}
     * @param {cardPile instance} to which return cards
     */
    var cardBucket = function(type, pile) {
      // leverage methods of cardPile
      this.cardPile = cardPile();
      this.list = this.cardPile.list;
      this.add = this.cardPile.add;
      
      /**
       * remove a card from user and back to deck. Put it
       * at the bottom
       */
      this.discard = function(name) {
        var card = this.cardPile.removeByName(name);
        this.pile.push(card);
      }
      this.getCardFromGamePile = function() {
        var card = this.pile.draw();
        this.add(card);
        return card;
      }
      this.type = type;
      this.pile = pile;
      return this;
    };
    
    // Public API here
    return function Factory(type, pile) {
      return new cardBucket(type, pile);
    }
  });
