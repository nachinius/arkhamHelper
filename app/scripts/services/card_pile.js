'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPile
 * @description
 * # cardPile
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').factory('cardPile', function(Shuffler, _) {
  // Service logic
  // ...
  
  var cardPile = function(type) {
    var that = this;
    
    /**
     * @var Direct access to the list
     * @api
     */
    that.list = [];
    
    that.lastId = 0;
    
    /**
     * Add card to the pile.
     * If missing id, create one for it.
     * 
     * @param {Object} card
     */
    that.add =  function(card) {
      if(angular.isUndefined(card.id)) {
        that.lastId = that.lastId + 1;
        card.id = that.lastId;
      }
      that.push(card);
    };
    
    /**
     * Find a card by its id property
     * 
     * @return {Object|null} card
     */
    that.find = function(id) {
      var found = _.find(that.list, function(card) {
        return card.id == id;
      });
      return found;
    }
    
    /**
     * Find a card identified by its name property
     * 
     * @return {Object|null} card
     */
    that.findByName = function(name) {
      var found = _.find(that.list, function(card) {
        return card.name == name;
      });
      return found;
    };
    
    /**
     * find the first card given the 'name' and
     * remove it from the deck
     *
     * @param {string} name
     * @return {Object|null}
     */
    that.removeByName = function(name) {
      var found = that.findByName(name);
      if (found) {
        that.list.splice(_.indexOf(that.list, found), 1);
        return found;
      } else {
    	  return null;
      }
    };
    
    /**
     * get one card from the top
     * 
     * @return {Object|cad}
     */
    that.draw = function() {
      return that.list.shift();
    };
    
    /**
     * Draw one card from anywhere in the deck
     */
    that.drawRandom = function() {
      return that.removeAny();
    };
    
    /**
     * put one card at the bottom of the pile
     * 
     * @param {Object} card
     */
    that.push = function(card) {
      that.list.push(card);
    }
    
    /**
     * Remove any card from the deck
     */
    that.removeAny = function() {
      var count = that.list.length;
    	var removed = that.list.splice(Math.floor(Math.random()*count),1);
    	return removed;
    }
    
    /**
     * @param {integer} n amount of times to shuffle
     */
    that.shuffle = function(n) {
      n = n | 1;
      while(n-- > 0) {
        Shuffler(that.list);
      }
    };
    
    if(angular.isUndefined(type)) {
      type = '';
    }
    that.type = type;
    /**
     * in: camelCase
     * out: Camel Case
     */
    this.name = type.replace(/^[a-z]|[A-Z]/g, function(match,offset) {
      return offset === 0 ? match.toUpperCase() : " " + match;
    });
    /**
     * in: camelCase
     * out: camel_case
     */
    this.imgSubDir = type.replace(/[A-Z]/g,function(match) {
      return '_'+match.toLowerCase();
    });
  };
  
  return function Factory(type) {
    return new cardPile(type);
  }
});
