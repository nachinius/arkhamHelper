'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardBucket
 * @description
 * # cardBucket
 * Factory of cardBucket.
 */
angular.module('arkhamHelperApp')
  .factory('cardBucket', function (cardPile) {
    // Service logic

    /**
     * @param {string}
     * @param {cardPile} pile external cardPile source
     * of drawn cards, and destination of droped cards.
     */
    var cardBucket = function(type, externalPile) {
      // leverage methods of cardPile
      this.cardPile = cardPile();
      this.list = this.cardPile.list;

      this.type = type;
      this.externalPile = externalPile;

      /**
       * add a card to the bucket
       */
      this.add = this.cardPile.add;
      
      /**
       * remove a card from user and back to deck. Put it
       * at the bottom
       */
      this.discard = function(name) {
        var card = this.cardPile.removeByName(name);
        card.exhaust = false;
        this.externalPile.push(card);
      }

      /**
       * Exhaust the card. Which means can not be reused
       * during the turn. 
       */
      this.exhaust = function(card) {
        card.exhaust = true;
      }
      /**
       * Restore the status of an exhausted card
       */
      this.restore = function(card) {
        card.exhaust = false;
      }
      /**
       * find the first card in the bucket that has the name
       */
      this.findByName = function(name) {
        var found = this.cardPile.findByName(name);
        return found;
      }
      /**
       * get a card from the external pile
       */
      this.draw = function() {
        var card = this.externalPile.draw();
        // external pile may be empy
        if(card) {
          this.add(card);
          return card;
        } else {
          return null;
        }
      }
      return this;
    };
    
    // Public API here
    return function Factory(type, pile) {
      return new cardBucket(type, pile);
    }
  });
