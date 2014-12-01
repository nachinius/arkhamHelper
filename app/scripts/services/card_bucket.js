'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardBucket
 * @description
 * # cardBucket
 * Factory of cardBucket.
 */
angular.module('arkhamHelperApp').factory('cardBucket', function(cardPile) {

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
    
    /**
     * @var cardPile
     */
    this.externalPile = externalPile;
    this.name = externalPile.name;
    this.type = externalPile.type;
    this.imgSubDir = externalPile.imgSubDir;
    
    /**
     * add a card to the bucket
     */
    this.add = this.cardPile.add;
    
    /**
     * remove a card from user and back to deck. Put it
     * at the bottom of the external Pile
     * 
     * @param string
     */
    this.discard = function(name) {

      var card = this.removeByName(name);
      card.exhaust = false;
      this.externalPile.push(card);
    }

    /**
     * Remove a card identified by its name from this deck.
     * 
     * @param {string} name 
     * @return {object} card
     */
    this.removeByName = function(name) {

      var card = this.cardPile.removeByName(name);
      return card;
    }

    /**
     * discard all cards
     */
    this.discardAll = function() {

      var that = this;
      this.list.forEach(function(card) {

        that.discard(card.name);
      });
    };
    
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
     * Attempt to draw a specific card identified by name
     */
    this.drawByName = function(name) {

      var card = this.externalPile.removeByName(name);
      if (card) {
        this.add(card);
        return card;
      } else {
        return null;
      }
    }

    /**
     * get a card from the external pile
     */
    this.draw = function() {

      var card = this.externalPile.draw();
      // external pile may be empy
      if (card) {
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
