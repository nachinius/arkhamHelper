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
  
  var cardPile = function() {
    var that = this;
    that.list = [];
    that.lastId = 0;
    that.add =  function(card) {
      if(angular.isUndefined(card.id)) {
        that.lastId = that.lastId + 1;
        card.id = that.lastId;
      }
      that.push(card);
    };
    that.find = function(id) {
      var found = _.find(that.list, function(card) {
        return card.id = id;
      });
      return found;
    }
    that.findByName = function(name) {
      var found = _.find(that.list, function(card) {
        return card.name == name;
      });
      return found;
    };
    /**
     * find the first card given the 'name' and
     * remove from the deck
     */
    that.removeByName = function(name) {
      var found = that.findByName(name);
      if (found) {
        that.list.splice(_.indexOf(that.list, found), 1);
        return found;
      }
    };
    /**
     * get one card from the top
     */
    that.draw = function() {
      return that.list.shift();
    };
    
    /**
     * put one card at the bottom of the pile
     */
    that.push = function(card) {
      that.list.push(card);
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
  };
  
  return function Factory() {
    return new cardPile();
  }
});
