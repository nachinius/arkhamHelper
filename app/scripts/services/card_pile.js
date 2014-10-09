'use strict';

/**
 * @ngdoc service
 * @name arkhamHelperApp.cardPile
 * @description
 * # cardPile
 * Factory in the arkhamHelperApp.
 */
angular.module('arkhamHelperApp').factory('cardPile', function(Shuffler) {
  // Service logic
  // ...
  
  var cardPile = function() {
    var that = this;
    that.list = [];
    that.add =  function(card) {
      that.list.push(card);
    };
    /**
     * find the first card given the 'name' and
     * remove from the deck
     */
    that.removeByName = function(name) {
      var found = _.find(that.list, function(card) {
        return card.name == name;
      });
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
    that.push = that.add;
    
    that.shuffle = function() {
      Shuffler(that.list);
    };
  };
  
  return function Factory() {
    return new cardPile();
  }
});
